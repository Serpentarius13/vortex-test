<script lang="ts">
  import type { IMeeting } from "$entities/meeting";
  import Search from "flowbite-svelte/Search.svelte";
  import Select from "svelte-select";
  import { useSearchParams } from "$shared/lib/hooks/useSearchParams";
  import { composeFilters } from "$shared/lib/utils/composeFilters";
  import {
    createMeetingsFilters,
    LOCATION_ALL,
  } from "../lib/utils/filterMeetings";
  import { extractLocationsFromMeetings } from "../lib/utils/extractLocationsFromMeetings";

  import { sortMeetingsByDate } from "$features/meeting/lib/utils/sortMeetingsByDate";
  import { filterMeetingsByTimeframe } from "../lib/utils/filterMeetings";
  import MeetingSearcherPassedSwitchButton from "./MeetingSearcherPassedSwitchButton.svelte";

  export let meetings: IMeeting[] = [];

  const { getSearchParam, setSearchParam } = useSearchParams({
    params: ["search", "location", "passed"],
  });

  let searchValue = getSearchParam("search");
  let locationValue = getSearchParam("location") || LOCATION_ALL;
  let passed = getSearchParam("passed") === "true";

  const handleChangePassed = (val: boolean) => {
    setSearchParam("passed", val ? "true" : "");
    passed = val;
  };
  const handleChangeValue = (ev: { detail: { value: string } }) => {
    locationValue = ev.detail.value;
  };

  $: {
    setSearchParam("location", locationValue);
    setSearchParam("search", searchValue);
  }

  $: locations = [LOCATION_ALL, ...extractLocationsFromMeetings(meetings)];

  $: filters = createMeetingsFilters({
    search: searchValue,
    location: locationValue,
  });

  $: meetingsData = filterMeetingsByTimeframe(
    sortMeetingsByDate(
      composeFilters(meetings, filters),
      passed ? "asc" : "desc",
    ),
  );
</script>

<section>
  <header class="flex gap-2 mb-2 flex-col md:flex-row">
    <Search bind:value={searchValue} placeholder="Search events" />

    <Select
      class="!max-w-[200px]"
      items={locations}
      clearable={false}
      value={locationValue}
      on:change={handleChangeValue}
    />

    <nav class="flex gap-1">
      <MeetingSearcherPassedSwitchButton
        meetingsCount={meetingsData.inProgressOrFuture.length}
        {handleChangePassed}
        {passed}
      />

      <MeetingSearcherPassedSwitchButton
        meetingsCount={meetingsData.passed.length}
        {handleChangePassed}
        {passed}
        type="passed"
      />
    </nav>
  </header>

  <slot
    filteredMeetings={passed
      ? meetingsData.passed
      : meetingsData.inProgressOrFuture}
  />
</section>

<style lang="scss">
</style>

<script lang="ts">
  import { sortMeetingsByDate, useMeetings } from "$entities/meeting";
  import LoaderWrapper from "$shared/ui/Loader/ui/LoaderWrapper.svelte";
  import MeetingList from "$entities/meeting/ui/MeetingList.svelte";

  const { loading, data, error } = useMeetings();

  $: meetings = $data ? sortMeetingsByDate($data, "desc") : [];
</script>

<LoaderWrapper error={$error} loading={$loading}>
  <MeetingList {meetings} />
</LoaderWrapper>

<style lang="scss">
</style>

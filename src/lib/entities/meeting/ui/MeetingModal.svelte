<script lang="ts">
  import { MapLocationOutline } from "flowbite-svelte-icons";
  import { Modal } from "flowbite-svelte";
  import type { IMeeting } from "$entities/meeting";
  import MeetingDate from "./MeetingDate.svelte";
  import { makeMeetingUrlHref } from "../lib/utils/makeMeetingUrlHref";

  export let open: boolean = false;
  export let meeting: IMeeting | null;
</script>

<Modal bind:open autoclose outsideclose>
  {#if meeting}
    <div>
      <div class="p-4 flex flex-col gap-7">
        <h2 class="text-2xl text-black font-bold">
          {meeting.title}
        </h2>

        <div class="flex items-center gap-6">
          <MeetingDate
            dateEnd={meeting.date_end}
            dateStart={meeting.date_start}
            isMonthYearRow
            durationClass="!text-base"
          />

          <div class="flex items-center gap-1">
            <MapLocationOutline />

            <span class="font-bold text-purple-600">
              {meeting.location}
            </span>
          </div>
        </div>

        <p class="max-w-full text-gray-700">
          {meeting.description}
        </p>

        <a
          target="_blank"
          rel="external"
          href={makeMeetingUrlHref(meeting.url)}
          class="text-purple-600 font-bold"
        >
          Visit event's website
        </a>
      </div>
    </div>
  {/if}
</Modal>

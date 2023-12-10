<script lang="ts">
  import Badge, { type BadgeProps } from "flowbite-svelte/Badge.svelte";
  import {
    getMeetingDayText,
    getMeetingDurationText,
  } from "../lib/utils/getMeetingDayText";
  import { getMonthName } from "$shared/lib/utils/getMonthName";
  import { getCurrentMonth } from "$shared/lib/utils/getCurrentDate";
  import { splitMeetingDate } from "../lib/utils/splitMeetingDate";

  export let dateStart: string;
  export let dateEnd: string;
  export let isMonthYearRow: boolean = false;
  export let durationClass: string = "";

  $: startDateData = splitMeetingDate(dateStart);
  $: endDateData = splitMeetingDate(dateEnd);

  $: isCurrentMonth = getCurrentMonth() === startDateData.month;

  $: colors = isCurrentMonth
    ? {
        bg: "bg-red-600",
        text: "text-red-600",
      }
    : {
        bg: "bg-gray-600",
        text: "text-gray-600",
      };
</script>

<div class="grid grid-cols-[64px_1fr] gap-3 w-fit">
  <Badge large class={`text-white ${colors.bg}`}>
    <span class="font-bold text-base">
      {getMeetingDayText(startDateData.day, endDateData.day)}
    </span>
  </Badge>
  <div class={`${isMonthYearRow && "!flex gap-2 items-center"}`}>
    <span class={`mb-0.5  block text-xl font-bold ${colors.text}`}>
      {getMonthName(startDateData.month)}
    </span>

    <span class={`text-xs font-thin text-gray-500 ${durationClass}`}>
      {startDateData.year}, {getMeetingDurationText(
        startDateData.date,
        endDateData.date,
      )}
    </span>
  </div>
</div>

<style lang="scss">
</style>

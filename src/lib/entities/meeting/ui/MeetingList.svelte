<script lang="ts">
  import type { IMeeting } from "$entities/meeting";

  import MeetingDate from "$entities/meeting/ui/MeetingDate.svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";

  export let meetings: IMeeting[] = [];
  export let onMeetingClick: (meeting: IMeeting) => void = () => null;

  const columns = ["Date", "Event name", "Location"];
</script>

{#if meetings.length === 0}
  <p class="text-gray-500 w-full text-center p-2 text-xl">No meetings found</p>
{:else}
  <Table>
    <TableHead>
      {#each columns as column}
        <TableHeadCell>
          {column}
        </TableHeadCell>
      {/each}
    </TableHead>

    <TableBody tableBodyClass="divide-y">
      {#each meetings as row}
        <TableBodyRow
          on:click={() => onMeetingClick(row)}
          class="cursor-pointer hover:bg-gray-200 transition-all flex-1"
        >
          <TableBodyCell>
            <MeetingDate dateStart={row.date_start} dateEnd={row.date_end} />
          </TableBodyCell>

          <TableBodyCell>
            <span class="font-bold">
              {row.title}
            </span>
          </TableBodyCell>

          <TableBodyCell>
            <span class="text-gray-700">
              {row.location}
            </span>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
{/if}

<style lang="scss">
</style>

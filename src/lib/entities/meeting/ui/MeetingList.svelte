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

  const columns = ["Date", "Event name", "Location"];
</script>

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
      <TableBodyRow>
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

<style lang="scss">
</style>

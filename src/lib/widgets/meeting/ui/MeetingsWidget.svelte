<script lang="ts">
  import { type IMeeting, useMeetings } from "$entities/meeting";
  import LoaderWrapper from "$shared/ui/Loader/ui/LoaderWrapper.svelte";
  import MeetingList from "$entities/meeting/ui/MeetingList.svelte";
  import MeetingSearcher from "$features/meeting/ui/MeetingSearcher.svelte";
  import MeetingModal from "$entities/meeting/ui/MeetingModal.svelte";

  const { loading, data, error } = useMeetings();

  let selectedMeeting: IMeeting | null = null;

  const handleSelectMeeting = (meeting: IMeeting) => {
    selectedMeeting = meeting;
  };
</script>

<LoaderWrapper
  error={$error ? "Ошибка загрузки. Перезагрузите страницу" : ""}
  loading={$loading}
>
  <MeetingSearcher meetings={$data} let:filteredMeetings={meetings}>
    <MeetingList {meetings} onMeetingClick={handleSelectMeeting} />
  </MeetingSearcher>
</LoaderWrapper>

<MeetingModal meeting={selectedMeeting} open={!!selectedMeeting} />

<style lang="scss">
</style>

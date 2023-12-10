import type { IMeeting } from "$entities/meeting/lib/types/meeting.entity";
import { splitMeetingDate } from "$entities/meeting/lib/utils/splitMeetingDate";

export const sortMeetingsByDate = (
  meetings: IMeeting[],
  direction: "asc" | "desc",
) => {
  return meetings.toSorted((a, b) => {
    const dateA = new Date(a.date_end);
    const dateB = new Date(b.date_end);

    if (direction === "asc") {
      return dateA > dateB ? -1 : 1;
    }

    return dateB > dateA ? -1 : 1;
  });
};

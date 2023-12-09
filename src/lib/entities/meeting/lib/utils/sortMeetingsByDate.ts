import type { IMeeting } from "../types/meeting.entity";
import { splitMeetingDate } from "$entities/meeting/lib/utils/splitMeetingDate";

export const sortMeetingsByDate = (
  meetings: IMeeting[],
  direction: "asc" | "desc",
) => {
  return meetings.toSorted((a, b) => {
    const dateA = splitMeetingDate(a.date_start);
    const dateB = splitMeetingDate(b.date_start);

    const sumA = dateA.year + dateA.month;
    const sumB = dateB.year + dateB.month;

    if (direction === "asc") {
      return sumA - sumB;
    }

    return sumB - sumA;
  });
};

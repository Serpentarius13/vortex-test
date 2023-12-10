import type { IMeeting } from "$entities/meeting";

export const extractLocationsFromMeetings = (meetings: IMeeting[]) => {
  return meetings.map((meeting) => meeting.location);
};

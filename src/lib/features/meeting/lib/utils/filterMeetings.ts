import type { IMeeting } from "$entities/meeting";
import { searchWithinString } from "$shared/lib/utils/searchWithinString";

export const LOCATION_ALL = "All";

export const createMeetingsFilterSearch =
  (search: string) => (meeting: IMeeting) =>
    searchWithinString(meeting.title, search);

export const createMeetingsFilterLocation =
  (location: string) => (meeting: IMeeting) =>
    location === LOCATION_ALL ? true : meeting.location === location;

export const filterMeetingsByTimeframe = (meetings: IMeeting[]) => {
  const passed: IMeeting[] = [];
  const inProgressOrFuture: IMeeting[] = [];

  meetings.forEach((meeting) => {
    const dateEnd = new Date(meeting.date_end);
    if (dateEnd < new Date()) {
      passed.push(meeting);
      return;
    }

    inProgressOrFuture.push(meeting);
  });

  return {
    passed,
    inProgressOrFuture,
  };
};

export const createMeetingsFilters = ({
  search,
  location,
}: {
  search: string;
  location: string;
}) => {
  return [
    createMeetingsFilterSearch(search),
    createMeetingsFilterLocation(location),
  ];
};

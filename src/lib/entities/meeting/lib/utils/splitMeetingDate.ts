import { getWeekdayFromDate } from "$shared/lib/utils/getCurrentDate";

export const splitMeetingDate = (date: string) => {
  const splitDate = date.split("/");
  const day = +splitDate[1];
  const month = +splitDate[0];
  const year = +splitDate[2];

  if (!day || !month || !year) throw new Error("Invalid date");

  return {
    day,
    month,
    year,
    date: getWeekdayFromDate(date),
  };
};

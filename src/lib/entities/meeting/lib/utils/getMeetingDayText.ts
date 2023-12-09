import { getShortDayName } from "$shared/lib/utils/getDayName";

export const getMeetingDayText = (dayStart: number, dayEnd: number) => {
  if (dayStart === dayEnd) {
    return dayStart;
  }

  return `${dayStart}-${dayEnd}`;
};

export const getMeetingDurationText = (dayStart: number, dayEnd: number) => {
  const dayStartName = getShortDayName(+dayStart);
  const dayEndName = getShortDayName(+dayEnd);

  return `${dayStartName}-${dayEndName}`;
};

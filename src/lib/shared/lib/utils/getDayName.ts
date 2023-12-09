const SHORT_DAY_NAMES = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat",
};

export const getShortDayName = (day: number) => {
  if (day < 1 || day > 7) {
    return "Invalid day";
  }

  return SHORT_DAY_NAMES[day as keyof typeof SHORT_DAY_NAMES];
};

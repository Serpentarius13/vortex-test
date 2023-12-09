const MONTH_NAMES = {
  1: "January",
  2: "February",
  3: "March",

  4: "April",
  5: "May",

  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
} as const;

export const getMonthName = (month: number) => {
  if (month < 0 || month > 12) {
    return "Invalid month";
  }

  return MONTH_NAMES[month as keyof typeof MONTH_NAMES];
};

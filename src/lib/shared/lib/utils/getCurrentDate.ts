export const getCurrentMonth = () => new Date().getMonth() + 1;

export const getWeekdayFromDate = (date: string) => new Date(date).getDay() + 1;

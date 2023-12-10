type TFilterFn<T> = (arg: T, index?: number, array?: T[]) => boolean;

export const composeFilters = <T>(arr: T[], filters: TFilterFn<T>[]) =>
  arr.filter((item, index, array) =>
    filters.every((f) => f(item, index, array)),
  );

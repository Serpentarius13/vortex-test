export const searchWithinString = (
  value: string,
  ...searchValues: string[]
) => {
  return searchValues.some((searchValue) => {
    const regex = new RegExp(searchValue, "ig");

    return regex.test(value);
  });
};

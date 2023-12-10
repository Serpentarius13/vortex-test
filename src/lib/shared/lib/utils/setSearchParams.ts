export const setSearchParams = (params: URLSearchParams) => {
  const url = new URL(window.location.href);

  for (const [key] of url.searchParams) {
    const newValue = params.get(key);

    if (!newValue) {
      url.searchParams.delete(key);
    }
  }

  for (const [key, value] of params) {
    url.searchParams.set(key, value);
  }

  window.history.replaceState(null, "", url);
};

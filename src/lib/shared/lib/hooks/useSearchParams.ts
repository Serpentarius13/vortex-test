import { derived, get, writable } from "svelte/store";
import { setSearchParams } from "$shared/lib/utils/setSearchParams";
import { onMount } from "svelte";

interface IUseSearchParamsOptions<T> {
  params: T[];
}

export const useSearchParams = <T extends string>({
  params,
}: IUseSearchParamsOptions<T>) => {
  const searchParams = writable(new URLSearchParams(window.location.search));

  searchParams.subscribe((val) => {
    setSearchParams(val);
  });

  const setSearchParam = (key: T, value: string | null) => {
    searchParams.update((params) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      return params;
    });
  };

  const setParams = (params: Record<T, string>) => {
    Object.entries(params).forEach(([key, value]) => {
      setSearchParam(key as T, value as string);
    });
  };

  const getSearchParam = (key: T) => {
    return get(searchParams).get(key) ?? "";
  };

  const removeSearchParam = (key: T) => {
    searchParams.update((params) => {
      params.delete(key);
      return params;
    });
  };

  return {
    setSearchParam,
    setParams,
    removeSearchParam,
    getSearchParam,
  };
};

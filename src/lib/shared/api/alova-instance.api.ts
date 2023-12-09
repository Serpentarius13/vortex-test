import { createAlova } from "alova";
import SvelteHook from "alova/svelte";
import GlobalFetch from "alova/GlobalFetch";
import { getEnvVar } from "../lib/utils/getEnvVar";

const baseURL = getEnvVar("VITE_API_URL");

export const alovaInstance = createAlova({
  statesHook: SvelteHook,
  requestAdapter: GlobalFetch(),
  responded: (response) => response.json().then(({ data }) => data),
  baseURL,
});

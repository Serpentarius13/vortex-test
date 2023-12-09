import { useRequest } from "alova";
import { alovaInstance } from "$shared/api/alova-instance.api";
import type { IMeeting } from "$entities/meeting";

export const useMeetings = () => {
  return useRequest(alovaInstance.Get<IMeeting[]>("/events"));
};

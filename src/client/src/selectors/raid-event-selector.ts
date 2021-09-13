import {RootState} from "../root/root";

export const raidEventsSelector = (state: RootState) => state.raidEvent.createRaidStatus;
export const eventSelector = (state: RootState) => state.raidEvent.eventList;
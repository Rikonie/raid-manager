import {RootState} from "../root/root";

export const raidersSelector = (state: RootState) => state.raider.raidersList;

export const createRaiderStatusSelector = (state: RootState) => state.raider.createRaiderStatus;
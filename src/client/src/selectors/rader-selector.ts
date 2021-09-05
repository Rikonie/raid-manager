import {RootState} from "../root/root";

export const raidersSelector = (state: RootState) => state.raider.raidersList;
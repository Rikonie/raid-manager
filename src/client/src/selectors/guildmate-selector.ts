import {RootState} from "../root/root";

export const guildmatesPageSelector = (state: RootState) => state.guildmate.guildmateListPage;
export const guildmateCountSelector = (state: RootState) => state.guildmate.guildmateCount;
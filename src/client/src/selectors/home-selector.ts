import {RootState} from "../root/root";

export const opened = (state: RootState) => state.home.opened;

export const userSelector = (state: RootState) => state.home.user;

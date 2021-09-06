import {createReducer} from "typesafe-actions";
import {Raider} from "../models/raider";
import {Actions} from "./actions";
import {combineReducers} from "redux";

const raidersList = createReducer<Raider[]>(null)
  .handleAction(Actions.raider.loadRaiders.success, (state, action) => {
      return action.payload;
  });

export const raidersReducer = () =>
    combineReducers ({
        raidersList
    });
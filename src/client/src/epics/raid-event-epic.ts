import {RootEpic} from "./root-epic";
import {catchError, map, filter, switchMap} from "rxjs/operators";
import {isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {of, from} from "rxjs";

const raidEventCreate: RootEpic = (action$, _, {raidEventService}) =>
    action$.pipe(
      filter(isActionOf(Actions.raidEvent.createRaid.request)),
      switchMap(x=>{
          return from(raidEventService.CreateRaid(x.payload)).pipe(
              map((response) =>{
                  return Actions.raidEvent.createRaid.success(response);
              }),
              catchError(x=>{
                  return of(Actions.raidEvent.createRaid.failure(x));
              })
          )
      })
    );

export const raidEventEpics = [
    raidEventCreate,
];
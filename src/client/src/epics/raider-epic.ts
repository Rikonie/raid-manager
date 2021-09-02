import {RootEpic} from "./root-epic";
import {action, isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {catchError, filter, map, mergeMap, switchMap} from "rxjs/operators";
import {of, from} from "rxjs";

const raiderPageOpened: RootEpic = (action$, _, {raidersService}) =>
    action$.pipe(
        filter(isActionOf(Actions.raider.raiderOpened)),
        switchMap((action) => {
            return raidersService.GetRaidersInfoPage(1).then(r => Actions.raider.loadRaiders.success(r))
        })
    );



const raiderCreate: RootEpic = (action$, _, {raidersService}) =>
    action$.pipe(
        filter(isActionOf(Actions.raider.createRaider.request)),
        switchMap(x => {
                return from(raidersService.CreateRaider(x.payload)).pipe(
                    map((response) => {
                        return Actions.raider.createRaider.success(response);
                    }),
                    catchError(x=>{
                        return of(Actions.raider.createRaider.failure(x));
                    })
                )
            },
        )
    );

export const raiderEpics = [
    raiderPageOpened,
    raiderCreate,
];

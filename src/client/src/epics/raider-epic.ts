import {RootEpic} from "./root-epic";
import {action, isActionOf} from "typesafe-actions";
import {Actions} from "../store/actions";
import {catchError, filter, map, mergeMap, switchMap} from "rxjs/operators";
import {of, from} from "rxjs";

const raiderPageOpened: RootEpic = (action$, _, {}) =>
    action$.pipe(
        filter(isActionOf(Actions.raider.raiderOpened)),
        map((action) => {
            return Actions.raider.loadRaiders.request({page:1, size:10})
        }),
        catchError(x=>{
            return of(Actions.raider.loadRaiders.failure(x));
        })
    );

const raiderPageLoad: RootEpic = (action$, _, {raidersService}) =>
    action$.pipe(
        filter(isActionOf(Actions.raider.loadRaiders.request)),
        switchMap((action) => {
            return raidersService.GetRaidersInfoPage(action.payload.page, action.payload.size).then(r => Actions.raider.loadRaiders.success(r))
        }),
        catchError(x=>{
            console.log(x);
            return of(Actions.raider.loadRaiders.failure(x))
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

const raiderDelete: RootEpic = (action$, _, {raidersService}) =>
    action$.pipe(
        filter(isActionOf(Actions.raider.deleteRaider.request)),
        switchMap(x => {
                return from(raidersService.DeleteRaider(x.payload)).pipe(
                    map((response) => {
                        return Actions.raider.deleteRaider.success(response);
                    }),
                    catchError(x=>{
                        return of(Actions.raider.deleteRaider.failure(x));
                    })
                )
            },
        )
    );


export const raiderEpics = [
    raiderPageOpened,
    raiderCreate,
    raiderDelete,
    raiderPageLoad
];

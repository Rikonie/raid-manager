import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {raidersSelector} from "../../selectors/rader-selector";
import {Raider} from "../../models/raider";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {RaidersComponent} from "../../components/raiders/raiders-page-component";
import {PageComponent} from "../../components/shared/pagination/pages-button-select-component";


export const RaidersPage = () => {

    let raiders = useSelector(raidersSelector) as Raider[];
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(Actions.raider.raiderOpened())
    }, [dispatch]);

    let [page, SetPage] = useState(1);
    let pageChange = (a:any) => {
        dispatch(Actions.raider.loadRaiders.request({page:a}));
        SetPage(a)
    };

    let deleteRaider=(raider) =>{
        dispatch(Actions.raider.deleteRaider.request(raider.id))
    };

    return (
        <div>
            <PageComponent page={page} pageChange={pageChange}/>
            {raiders? <div>
                <RaidersComponent raiders={raiders} deleteRaiderClick={deleteRaider}/>
            </div> : <div>loading</div>}
        </div>
    );
};
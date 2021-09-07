import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {createRaiderStatusSelector, raidersSelector} from "../../selectors/rader-selector";
import {Raider} from "../../models/raider";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {RaidersComponent} from "../../components/raiders/raiders-page-component";
import {PageComponent} from "../../components/shared/pagination/pages-button-select-component";
import Modal from "react-modal";
import styles from "../guild/guild-page.module.scss";
import {ButtonComponent} from "../../components/shared/button/button";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

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

    let deleteRaiderStatus = useSelector(createRaiderStatusSelector);
    let clear = () => {
        dispatch(Actions.raider.clearCreateRaider());
    };

    return (
        <div>
            <PageComponent page={page} pageChange={pageChange}/>
            {raiders? <div>
                <RaidersComponent raiders={raiders} deleteRaiderClick={deleteRaider}/>
            </div> : <div>loading</div>}
            <Modal style={customStyles} onRequestClose={clear} isOpen={!!deleteRaiderStatus}>
                <div className={styles.error}>{deleteRaiderStatus}</div>
                <ButtonComponent onClick={clear}>Ok</ButtonComponent>
            </Modal>
        </div>
    );
};
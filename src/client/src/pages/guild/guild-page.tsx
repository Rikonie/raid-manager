import React, {useEffect, useState} from "react";
import styles from ".//guild-page.module.scss";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {guildSelector} from "../../selectors/guild-selector";
import {Guild} from "../../models/guild";
import {Guildmate} from "../../models/guildmate";
import {guildmatesPageSelector} from "../../selectors/guildmate-selector";
import {GuildmatesComponent} from "../../components/guildmates/guildmates-сomponent";
import {GuildComponent} from "../../components/guld/guild-component";
import {PageComponent} from "../../components/shared/pagination/pages-button-select-component";
import {Raider} from "../../models/raider";
import {createRaiderStatusSelector} from "../../selectors/rader-selector";
import Modal from "react-modal";
import Button from '@material-ui/core/Button';
import {Paper, TableContainer} from "@material-ui/core";


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

export const GuildPage = () => {

    let guild = useSelector(guildSelector) as Guild;
    const dispatch = useAppDispatch();

     useEffect(() => {
         dispatch(Actions.guild.guildOpened());
     }, [dispatch]);

    let guildmates = useSelector(guildmatesPageSelector) as Guildmate[];

    let [page, SetPage]= useState(1);
    let pageChange = (a:any) =>{
        dispatch(Actions.guildmate.loadGuildmatesPage.request({page:a}));
        SetPage(a);
    };
    let createRaider = (guilmate: Guildmate) => {
        let raider = {...guilmate} as Raider;
        dispatch(Actions.raider.createRaider.request(raider))
    };

   let createRaiderStatus = useSelector(createRaiderStatusSelector);
   let clear = () => {
       dispatch(Actions.raider.clearCreateRaider());
    };

    return (
        <TableContainer component={Paper}>
            <PageComponent page={page} pageChange={pageChange}/>
            {guild? <div>
                <GuildComponent name={guild.name} faction={guild.faction} id={guild.id} realm={guild.realm}>
                </GuildComponent></div> :<div>Loading</div>}
            <div>Состав гильдии</div>
                <GuildmatesComponent guildmates={guildmates} createRaiderClick={createRaider}/>
            <Modal style={customStyles} onRequestClose={clear} isOpen={!!createRaiderStatus}>
                <div className={styles.error}>{createRaiderStatus}</div>
                <Button variant="contained" color="primary" onClick={clear}>Ok</Button>
            </Modal>
        </TableContainer>
    );
};
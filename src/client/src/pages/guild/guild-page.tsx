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


export const GuildPage = () => {

    let guild = useSelector(guildSelector) as Guild;
    const dispatch = useAppDispatch();

     useEffect(() => {
         dispatch(Actions.guild.guildOpened());
     }, [dispatch]);

    let guildmates = useSelector(guildmatesPageSelector) as Guildmate[];

    let [page, SetPage]= useState(1);
    let test = (a:any) =>{
        dispatch(Actions.guildmate.loadGuildmatesPage.request({page:a}));
        SetPage(a);
    };
    let createRaider =(guilmate: Guildmate) => {
        let raider = {...guilmate} as Raider;
        console.log(raider);
        dispatch(Actions.raider.createRaider.request(raider))
    };


    return (
        <div className={styles.bla}>
            <PageComponent page={page} pageChange={test}/>
            {guild? <div>
                <GuildComponent name={guild.name} faction={guild.faction} id={guild.id} realm={guild.realm}>
                </GuildComponent></div> :<div>Loading</div>}
                <GuildmatesComponent guildmates={guildmates} createRaiderClick={createRaider}></GuildmatesComponent>
        </div>
    );
};
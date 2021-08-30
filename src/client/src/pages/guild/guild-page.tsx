import React, {useEffect} from "react";
import {ClassSelectComponent} from "../../components/class-select/class-select-component";
import {RoleSelectComponent} from "../../components/role-select/role-select-component";
import {GenderSelectComponent} from "../../components/gender-select/gender-select-component";
import {DickPicComponent} from "../../components/dickpic/dickpic-component";
import styles from ".//guild-page.module.scss";
import logo from "../../logo.svg"
import {useSelector} from "react-redux";
import {opened} from "../../selectors/home-selector";
import {HttpClient} from "../../services/api/http-client";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {guildSelector} from "../../selectors/guild-selector";
import {Guild} from "../../models/guild";
import {GuildMate} from "../../models/guildmate";
import {guildMateSelector} from "../../selectors/guildmate-selector";




export const GuildPage = () => {

    let guild = useSelector(guildSelector) as Guild;
    const dispatch = useAppDispatch();

     useEffect(() => {
         dispatch(Actions.guild.guildOpened());
     }, [dispatch]);

    let guildMate = useSelector(guildMateSelector) as GuildMate;
    const gildMateDispatch = useAppDispatch();

    useEffect(() => {
        gildMateDispatch(Actions.guildMate.guildMateOpened());
    }, [gildMateDispatch]);

    return (
        <div>
            {guild ? <><div>{JSON.stringify(guild)}</div></> : <div>loading</div>}
            {guildMate ? <><div>{JSON.stringify(guildMate)}</div></> : <div>loading</div>}

            <table className={styles.table}>
                <caption className={styles.table}>Рейдовый состав</caption>
                <tr>
                    <td>Ник</td>
                    <td>Класс</td>
                    <td>Роль</td>
                    <td>Пол</td>
                    <td>DickPic</td>
                </tr>
            </table>
        </div>
    );
};
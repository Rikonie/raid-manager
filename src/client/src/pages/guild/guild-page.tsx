import React, {useEffect} from "react";
import styles from ".//guild-page.module.scss";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {guildSelector} from "../../selectors/guild-selector";
import {Guild} from "../../models/guild";
import {Guildmate} from "../../models/guildmate";
import {guildmatesSelector} from "../../selectors/guildmate-selector";

export const GuildPage = () => {

    let guild = useSelector(guildSelector) as Guild;
    const dispatch = useAppDispatch();

     useEffect(() => {
         dispatch(Actions.guild.guildOpened());
     }, [dispatch]);

    let guildmates = useSelector(guildmatesSelector) as Guildmate;

    return (
        <div>
            {guild ? <><div>{JSON.stringify(guild)}</div></> : <div>loading</div>}
            {guildmates ? <><div>{JSON.stringify(guildmates)}</div></> : <div>loading</div>}

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
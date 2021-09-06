import React from "react";
import {Guildmate} from "../../models/guildmate";
import {NameComponent} from "./guildmates-name-component";
import {ClassComponent} from "./guildmates-class-component";
import {RankComponent} from "./ranks-component";
import styles from '..//../components/shared/pagination/button.module.scss';

export class GuildmatesProps {
    guildmates?: Guildmate[];
    createRaiderClick: (guildmate: Guildmate) => void
}

export const GuildmatesComponent: React.FC<GuildmatesProps> = ({guildmates, createRaiderClick}) => {

    return (
        <>
            {guildmates ? <>
                <table>
                    <caption>Состав гильдии</caption>
                    <tr>
                        <td>Ник</td>
                        <td>Класс</td>
                        <td>Звание</td>
                    </tr>
                    {guildmates.map((g)=><tr>
                        <td><NameComponent name={g.name} classId={g.classId}></NameComponent></td>
                        <td><ClassComponent id={g.classId}></ClassComponent></td>
                        <td><RankComponent rank={g.rank}></RankComponent></td>
                        <td><button className={styles.button} onClick={()=>createRaiderClick(g)}>Создать Рейдера</button></td>
                    </tr>)}
                </table>
            </> : <div>loading</div>}
        </>
    );
};
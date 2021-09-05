import {Raider} from "../../models/raider";
import {RaidersNameComponent} from "./raiders-name-component";
import React from "react";
import {RaidersClassComponent} from "./raiders-class-component";
import {RaidersRankComponent} from "./raiders-rank-component";
import styles from "../shared/pagination/button.module.scss";


export class RaidersProps {
    raiders?: Raider [];
    deleteRaiderClick: (raider: Raider) => void
}

export const RaidersComponent: React.FC<RaidersProps> = ({raiders, deleteRaiderClick}) => {
    return (
        <>
            {raiders? <>
                <table>
                    <caption>Рейдовый состав</caption>
                    <tr>
                        <td>Ник</td>
                        <td>Класс</td>
                        <td>Звание</td>
                    </tr>
                    {raiders.map((g) => <tr>
                        <td><RaidersNameComponent name={g.name} classId={g.classId}/></td>
                        <td><RaidersClassComponent classId={g.classId}/></td>
                        <td><RaidersRankComponent rank={g.rank}/></td>
                        <td><button className={styles.button} onClick={()=>deleteRaiderClick(g)}>Удалить</button></td>
                    </tr>)}
                </table>
            </> : <div>loading</div>}
            </>
    );
};
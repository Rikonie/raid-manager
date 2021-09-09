import React from "react";
import {Guildmate} from "../../models/guildmate";
import {NameComponent} from "./guildmates-name-component";
import {ClassComponent} from "./guildmates-class-component";
import {RankComponent} from "./ranks-component";
import {ButtonComponent} from "../shared/button/button";

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
                        <td><NameComponent name={g.name} classId={g.classId}/></td>
                        <td><ClassComponent id={g.classId}/></td>
                        <td><RankComponent rank={g.rank}/></td>
                        <td><ButtonComponent  onClick={()=>createRaiderClick(g)}>Создать Рейдера</ButtonComponent></td>
                    </tr>)}
                </table>
            </> : <div>loading</div>}
        </>
    );
};
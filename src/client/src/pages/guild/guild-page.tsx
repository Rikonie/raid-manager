import React from "react";
import {ClassSelectComponent} from "../../components/class-select/class-select-component";
import {RoleSelectComponent} from "../../components/role-select/role-select-component";
import {GenderSelectComponent} from "../../components/gender-select/gender-select-component";
import {DickPicComponent} from "../../components/dickpic/dickpic-component";
import styles from ".//guild-page.module.scss";
import logo from "../../logo.svg"
import {useSelector} from "react-redux";
import {opened} from "../../selectors/home-selector";
import {HttpClient} from "../../services/api/http-client";

export enum Clazzes {
    Warrior = 1,
    Hunter = 3,
    Mage = 8,
    Rogue = 4,
    Priest = 5,
    Warlock = 9,
    Paladin =  2,
    Druid = 11,
    Shaman = 7,
    Monk = 10,
    DeathKnight = 6,
    DemonHunter = 12,
}

class guild {
    faction: string = "Horde";
    name: string = "Но не сегодня";
    realm: string = "Howling Fjord";
    constructor (guildFaction: string, gulidName: string, guildRealm: string) {
        this.faction = guildFaction;
        this.name = gulidName;
        this.realm = guildRealm;
        print()
        {
            console.log(`Гильдия ${this.name} играет за фракцию ${this.faction} и находится на сервере ${this.realm}`);
        }
    }
}
class guildMember {
    name: string;
    classId: number;
    rank: number;
    constructor (memberName: string, memberId: number, memberRank: number) {
        this.name = memberName;
        this.classId = memberId;
        this.rank = memberRank;
    }
}

export const GuildPage = () => {

    let home = useSelector(opened);

    const httpClient = new HttpClient("http://localhost:3000");

    httpClient.get<any>('/guild',{}).then(r =>
        // Не делайте так - получить доступ к этим данным в компоненте нельзя, т.к. они получаются ассинхронно
        console.log('piska',r) // Полученный запрос вывыливается в конссоль
    );
    return (
        <div>
            <div>{home}</div>
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
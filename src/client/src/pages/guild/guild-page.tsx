import React from "react";
import {ClassSelectComponent} from "../../components/class-select/class-select-component";
import {RoleSelectComponent} from "../../components/role-select/role-select-component";
import {GenderSelectComponent} from "../../components/gender-select/gender-select-component";
import {DickPicComponent} from "../../components/dickpic/dickpic-component";
import styles from ".//guild-page.module.scss";
import logo from "../../logo.svg"
import {useSelector} from "react-redux";
import {opened} from "../../selectors/home-selector";

export const GuildPage = () => {

    let home = useSelector(opened);

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
                <tr>
                    <td>Краколис</td>
                    <td>
                        <ClassSelectComponent></ClassSelectComponent>
                    </td>
                    <td><RoleSelectComponent></RoleSelectComponent></td>
                    <td><GenderSelectComponent></GenderSelectComponent></td>
                    <td><DickPicComponent></DickPicComponent></td>
                </tr>
                <tr>
                    <td>Акони</td>
                    <td>
                        <ClassSelectComponent></ClassSelectComponent>
                    </td>
                    <td><RoleSelectComponent></RoleSelectComponent></td>
                    <td><GenderSelectComponent></GenderSelectComponent></td>
                    <td><DickPicComponent></DickPicComponent></td>
                </tr>
                <tr>
                    <td>Друлих</td>
                    <td>
                        <ClassSelectComponent></ClassSelectComponent>
                    </td>
                    <td><RoleSelectComponent></RoleSelectComponent></td>
                    <td><GenderSelectComponent></GenderSelectComponent></td>
                    <td><DickPicComponent></DickPicComponent></td>
                </tr>
            </table>
        </div>
    );
};
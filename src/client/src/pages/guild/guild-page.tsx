import React from "react";
import { ClassSelectComponent } from "../../components/class-select/class-select-component";
import { RoleSelectComponent } from "../../components/role-select/role-select-component";
import { GenderSelectComponent } from "../../components/gender-select/gender-select-component";
import styles from ".//guild-page.module.scss";
import logo from  "../../logo.svg"

export const GuildPage = () => {
    return (
        <div>

            <img src={logo}></img>
          <table className={styles.table}>
   <caption className={styles.table}>Рейдовый состав</caption>
   <tr>
    <td>Ник</td>
    <td>Класс</td>
    <td>Роль</td>
    <td>Пол</td>
   </tr>
   <tr>
       <td>Краколис</td>
       <td>
           <ClassSelectComponent></ClassSelectComponent>
        </td>
        <td><RoleSelectComponent></RoleSelectComponent></td>
        <td><GenderSelectComponent></GenderSelectComponent></td>
        </tr>
  <tr>
       <td>Акони</td>
       <td>
           <ClassSelectComponent></ClassSelectComponent>
        </td>
        <td><RoleSelectComponent></RoleSelectComponent></td>
        <td><GenderSelectComponent></GenderSelectComponent></td>
        </tr>
        <tr>
       <td>Друлих</td>
       <td>
           <ClassSelectComponent></ClassSelectComponent>
        </td>
        <td><RoleSelectComponent></RoleSelectComponent></td>
        <td><GenderSelectComponent></GenderSelectComponent></td>
        </tr>
  </table>
        </div>
    );
};
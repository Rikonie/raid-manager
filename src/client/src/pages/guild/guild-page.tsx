import React from "react";
import { ClassSelectComponent } from "../../components/class-select/class-select-component";
import { RoleSelectComponent } from "../../components/role-select/role-select-component";
import styles from ".//guild-page.module.scss";

export const GuildPage = () => {
    return (
        <div>
          <table className={styles.table}>
   <caption className={styles.table}>Рейдовый состав</caption>
   <tr>
    <td>Ник</td>
    <td>Класс</td>
    <td>Роль</td>
   </tr>
   <tr>
       <td>Краколис</td>
       <td>
           <ClassSelectComponent></ClassSelectComponent>
        </td>
        <td><RoleSelectComponent></RoleSelectComponent></td>
        </tr>
  <tr>
       <td>Акони</td>
       <td>
           <ClassSelectComponent></ClassSelectComponent>
        </td>
        <td><RoleSelectComponent></RoleSelectComponent></td>
        </tr>
        <tr>
       <td>Друлих</td>
       <td>
           <ClassSelectComponent></ClassSelectComponent>
        </td>
        <td><RoleSelectComponent></RoleSelectComponent></td>
        </tr>
  </table>
        </div>
    );
};
import styles from ".//class-select.module.scss";
import React from "react";
export const ClassSelectComponent = () => {
    return (
        <select>
        <option className={styles.warrior}>Воин</option>
        <option className={styles.hunter}>Охотник</option>
        <option className={styles.mage}>Маг</option>
        <option className={styles.rogue}>Разбойник</option>
        <option className={styles.priest}>Жрец</option>
        <option className={styles.warlock}>Чернокнижник</option>
        <option className={styles.paladin}>Паладин</option>
        <option className={styles.druid}>Друид</option>
        <option className={styles.shaman}>Шаман</option>
        <option className={styles.monk}>Монах</option>
        <option className={styles.dh}>Охотник на демонов</option>
        <option className={styles.dk}>Рыцарь смерти</option>
        </select>
    );
};
import styles from ".//class-select.module.scss";
import React from "react";

export enum Clazzes {
    Warrior = 'warrior',
    Hunter = 'hunter',
    Mage = 'mage',
    Rogue = 'rogue',
    Priest = 'priest',
    Warlock = 'warlock',
    Paladin = 'paladin',
    Druid = 'druid',
    Shaman = 'shaman',
    Monk = 'monk',
    DeathKnight = 'dk',
    DemonHunter = 'dh',
}

export class ClassSelectComponentProps {
    name?: string;
    onSelect?: (selected: Clazzes) => void;
}

export const ClassSelectComponent: React.FC<ClassSelectComponentProps> = ({onSelect, name}) => {

    const classNames: string[] = Object.keys(Clazzes).map(key => Clazzes[key]);

    const onClassSelect = (event) => {
        onSelect(event.target.value);
    };

    return (
        <>
            <span>{name}</span>
            <select onChange={onClassSelect}>
                {classNames.map((k: string) =>
                    <option className={styles[k]} value={k}>{k}</option>
                )}
            </select>
        </>
    );

    // return <select>
    //     <option className={styles[Clazzes.Warrior]} value={Clazzes.Warrior}>Воин</option>
    //     <option className={styles[Clazzes.Hunter]} value={Clazzes.Hunter}>Охотник</option>
    //     <option className={styles[Clazzes.Mage]} value={Clazzes.Mage}>Маг</option>
    //     <option className={styles.rogue}>Разбойник</option>
    //     <option className={styles.priest}>Жрец</option>
    //     <option className={styles.warlock}>Чернокнижник</option>
    //     <option className={styles.paladin}>Паладин</option>
    //     <option className={styles.druid}>Друид</option>
    //     <option className={styles.shaman}>Шаман</option>
    //     <option className={styles.monk}>Монах</option>
    //     <option className={styles.dh}>Охотник на демонов</option>
    //     <option className={styles.dk}>Рыцарь смерти</option>
    // </select>


};
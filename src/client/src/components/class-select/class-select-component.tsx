import styles from ".//class-select.module.scss";
import React from "react";
import {Clazzes} from "../../models/enums/clazzes";


export class ClassSelectComponentProps {
    name?: string;
    onSelect?: (selected: number) => void;
}

export const ClassSelectComponent: React.FC<ClassSelectComponentProps> = ({onSelect, name}) => {

    const classNames: string[] = Object.keys(Clazzes).map(key => Clazzes[key])
        .filter(value => typeof value === 'string') as string[];

    const onClassSelect = (event) => {
        onSelect(parseInt(event.target.value));
    };

    return (
        <>
            <span>{name}</span>
            <select onChange={onClassSelect}>
                {classNames.map((k: string) =>
                    <option className={styles[k.toLocaleLowerCase()]} value={Clazzes[k]}>{k}</option>
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
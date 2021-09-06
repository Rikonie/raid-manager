import styles from "../guildmates/guildmates-name.module.scss";
import {Clazzes} from "../../models/enums/clazzes";
import React from "react";

class raidersNameProps {
    name: string;
    classId: number;
}

export const RaidersNameComponent: React.FC<raidersNameProps> = ({name, classId}) => {
    return (
        <>
            <span className={styles[Clazzes[classId].toLocaleLowerCase()]}>{name}</span>
        </>
    );
};
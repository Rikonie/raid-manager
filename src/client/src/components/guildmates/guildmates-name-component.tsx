import React from "react";
import {Clazzes} from "../../models/enums/clazzes";
import styles from "./guildmates-name.module.scss";

export const NameComponent: React.FC<nameProps> = ({name, classId}) => {

    return (
        <>
            <span className={styles[Clazzes[classId].toLocaleLowerCase()]}>{name}</span>
            </>
    );
};

class nameProps {
    name: string;
    classId: number;
};


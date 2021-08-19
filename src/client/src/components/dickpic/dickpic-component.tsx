import styles from ".//dickpic.module.scss";
import React from "react";
import {ClassSelectComponent, Clazzes} from "../../components/class-select/class-select-component";

export const DickPicComponent = () => {

    const onClazzSelect = (selected: Clazzes): void => {
        console.log('props');
    };

    return <ClassSelectComponent onSelect={onClazzSelect}/>
};
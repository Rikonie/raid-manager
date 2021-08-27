import React, {useState} from "react";
import {ClassSelectComponent, Clazzes} from "../../components/class-select/class-select-component";

export const DickPicComponent :React.FC<any> = ({test: test}) => {

    const [name, setName] = useState('default');

    const onClazzSelect = (selected: Clazzes): void => {
        setName(selected);
    };

    const promptCall = () => {
        let a = prompt();
        setName(a);
    };

    return <>
        <ClassSelectComponent name={name} onSelect={onClazzSelect}/>
        <button onClick={promptCall}>name click</button>
    </>
};
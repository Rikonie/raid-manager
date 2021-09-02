import React, {useState} from "react";
import {ClassSelectComponent} from "../../components/class-select/class-select-component";
import {Clazzes} from "../../models/enums/clazzes";

export const DickPicComponent :React.FC<any> = ({test: test}) => {

    const [name, setName] = useState('default');


    const promptCall = () => {
        let a = prompt();
        setName(a);
    };

    return <>
        <button onClick={promptCall}>name click</button>
    </>
};
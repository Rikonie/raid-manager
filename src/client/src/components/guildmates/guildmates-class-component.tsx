import React from "react";
import {Clazzes} from "../../models/enums/clazzes";

class classProps {
    id: number
}

export const ClassComponent: React.FC<classProps> = ({id}) => {
    return (
        <span>{Clazzes[id]}</span>
    );
};
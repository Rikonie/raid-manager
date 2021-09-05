import React from "react";
import {Clazzes} from "../../models/enums/clazzes";

class raidersClassProps {
    classId: number
}

export const RaidersClassComponent: React.FC<raidersClassProps> =({classId}) =>{
    return (
        <span>{Clazzes[classId]}</span>
    );
};

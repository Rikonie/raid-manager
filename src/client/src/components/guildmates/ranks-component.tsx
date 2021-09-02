import React from "react";
import {Ranks} from "../../models/enums/ranks";

class ranksProps {
    rank: number
}

export const RankComponent: React.FC<ranksProps> = ({rank}) => {
    return (
        <span>{Ranks[rank]}</span>
    );
};
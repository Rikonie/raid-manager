import {Ranks} from "../../models/enums/ranks";
import React from "react";

class raidersRankProps {
    rank: number
}

export const RaidersRankComponent: React.FC<raidersRankProps> = ({rank}) => {
    return (
        <span>{Ranks[rank]}</span>
    );
};
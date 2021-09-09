import React from "react";
import {Ranks} from "../../models/enums/ranks";

export class RankSelectComponentProps {
    rank?: string;
    onSelect?: (selected: number) => void;
    defaultValue?: any;
}

export const RankSelectComponent: React.FC<RankSelectComponentProps> = ({onSelect, rank, defaultValue = Ranks.Unknown}) => {
    const rankNames: string[] = Object.keys(Ranks).map(key => Ranks[key])
        .filter(value => typeof value === 'string') as string[];

    const onRankSelect = (event) => {
        onSelect(parseInt(event.target.value));
    };


    return (
        <>
            <span>{rank}</span>
            <select defaultValue={defaultValue} onChange={onRankSelect}>
                {rankNames.map((k:string) =>
                    <option value={Ranks[k]}>{k}</option>
                )}
            </select>
            </>
    )
};
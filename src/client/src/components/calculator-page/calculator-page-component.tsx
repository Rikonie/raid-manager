import styles from "../../pages/calculator/calculator.module.scss";
import {Select} from "@material-ui/core";
import {Raider} from "../../models/raider";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Item from "@material-ui/core/Grid";
import Grid from "@material-ui/core/Grid";

export class CalculatorProps {
    raiders?: Raider[];
    countRaiderOnGroup: number;
    countGroup: number;
}

export const CalculatorComponent: React.FC<CalculatorProps> = ({raiders, countRaiderOnGroup, countGroup}) => {
    let arrCountRaiderOnGroup = [];
    for (let i = 1; i <= countRaiderOnGroup; i++) {
        arrCountRaiderOnGroup.push(i);
    }
    let arrCountGroup = [];
    for (let i = 1; i <= countGroup; i++) {
        arrCountGroup.push(i);
    }

    return (<>
        {arrCountGroup.map((g) =>
            <Grid item xs={6}>
                <Item>Группа {g}</Item>
                <div className={styles.select}>
                    {(arrCountRaiderOnGroup.map((i: number) =>
                        <Select labelId="player" id={`${i}`} label="Выберите игрока">
                            {(raiders?.map((i: Raider) =>
                                <MenuItem value={i.name}>{i.name}</MenuItem>
                            ))}
                        </Select>))}
                </div>
            </Grid>)}
    </>)

};
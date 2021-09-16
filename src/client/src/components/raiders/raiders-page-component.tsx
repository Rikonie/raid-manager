import {Raider} from "../../models/raider";
import {RaidersNameComponent} from "./raiders-name-component";
import React from "react";
import {RaidersClassComponent} from "./raiders-class-component";
import {RaidersRankComponent} from "./raiders-rank-component";
import Button from '@material-ui/core/Button';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

export class RaidersProps {
    raiders?: Raider [];
    deleteRaiderClick: (raider: Raider) => void
}

export const RaidersComponent: React.FC<RaidersProps> = ({raiders, deleteRaiderClick}) => {
    return (
        <>
            {raiders? <>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ник</TableCell>
                        <TableCell>Класс</TableCell>
                        <TableCell>Звание</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {raiders.map((g) => <TableRow>
                        <TableCell><RaidersNameComponent name={g.name} classId={g.classId}/></TableCell>
                        <TableCell><RaidersClassComponent classId={g.classId}/></TableCell>
                        <TableCell><RaidersRankComponent rank={g.rank}/></TableCell>
                        <TableCell><Button  variant="contained" color="primary" onClick={()=>deleteRaiderClick(g)} startIcon={<PersonAddDisabledIcon />}>Удалить</Button></TableCell>
                    </TableRow>)}
                </TableBody>
                </Table>
            </> : <div>loading</div>}
            </>
    );
};
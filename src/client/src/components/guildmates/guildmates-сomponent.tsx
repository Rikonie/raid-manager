import React from "react";
import {Guildmate} from "../../models/guildmate";
import {NameComponent} from "./guildmates-name-component";
import {ClassComponent} from "./guildmates-class-component";
import {RankComponent} from "./ranks-component";
import Button from '@material-ui/core/Button';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export class GuildmatesProps {
    guildmates?: Guildmate[];
    createRaiderClick: (guildmate: Guildmate) => void
}

export const GuildmatesComponent: React.FC<GuildmatesProps> = ({guildmates, createRaiderClick}) => {
    return (
        <>
            {guildmates ? <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ник</TableCell>
                            <TableCell>Класс</TableCell>
                            <TableCell>Звание</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {guildmates.map((g)=><TableRow>
                        <TableCell><NameComponent name={g.name} classId={g.classId}/></TableCell>
                        <TableCell><ClassComponent id={g.classId}/></TableCell>
                        <TableCell><RankComponent rank={g.rank}/></TableCell>
                        <TableCell><Button variant="contained" color="primary" startIcon={<PersonAddIcon/>} onClick={()=>createRaiderClick(g)}>Создать Рейдера</Button></TableCell>
                    </TableRow>)}
                    </TableBody>
                </Table>
            </> : <div>loading</div>}
        </>
    );
};
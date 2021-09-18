import React, {useEffect, useState} from "react";
import styles from ".//guild-page.module.scss";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {guildSelector} from "../../selectors/guild-selector";
import {Guild} from "../../models/guild";
import {Guildmate} from "../../models/guildmate";
import {guildmateCountSelector, guildmatesPageSelector} from "../../selectors/guildmate-selector";
import {GuildmatesComponent} from "../../components/guildmates/guildmates-сomponent";
import {GuildComponent} from "../../components/guld/guild-component";
import {Raider} from "../../models/raider";
import {createRaiderStatusSelector} from "../../selectors/rader-selector";
import Button from '@material-ui/core/Button';
import {Box, MenuItem, Modal, Paper, TableContainer, Typography} from "@material-ui/core";
import {Pagination} from '@material-ui/lab'
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import FormControl from "@material-ui/core/FormControl";
import {style} from "../../styles/modal";


export const GuildPage = () => {

    let [pageSize, setPageSize] = useState(10);
    let [page, setPage]= useState(1);

    let guild = useSelector(guildSelector) as Guild;
    let guildmates = useSelector(guildmatesPageSelector) as Guildmate[];
    let countGuildmates = useSelector(guildmateCountSelector) as number;
    let createRaiderStatus = useSelector(createRaiderStatusSelector);

    let selectArray= [10,20,30,40,50];

    const dispatch = useAppDispatch();
     useEffect(() => {
         dispatch(Actions.guild.guildOpened());
     }, [dispatch]);

    let pageChange = (event: React.ChangeEvent<unknown>, value: number) =>{
        dispatch(Actions.guildmate.loadGuildmatesPage.request({page:value, size: pageSize}));
        setPage(value);
    };
    let createRaider = (guilmate: Guildmate) => {
        let raider = {...guilmate} as Raider;
        dispatch(Actions.raider.createRaider.request(raider))
    };
   let clear = () => {
       dispatch(Actions.raider.clearCreateRaider());
    };
   let onSelect = (event) => {
       dispatch(Actions.guildmate.loadGuildmatesPage.request({page:1, size: (parseInt(event.target.value))}
       )
       );
       console.log(event.target.value);
       setPageSize(parseInt(event.target.value));
       setPage(1);
   };

    return (
        <TableContainer component={Paper}>
            <Pagination count={(Math.floor(countGuildmates/pageSize)+1)} color="primary" page={page} onChange={pageChange}/>
            <FormControl>
                <InputLabel id="count">Количество</InputLabel>
                <Select defaultValue={10} onChange={onSelect}
                        labelId="count"
                        id="count" label="Количество">
                    {(selectArray.map((n: number) =>
                        <MenuItem value={n}>{n}</MenuItem>))}
                </Select>
            </FormControl>
            {guild? <div>
                <GuildComponent name={guild.name} faction={guild.faction} id={guild.id} realm={guild.realm}>
                </GuildComponent></div> :<div>Loading</div>}
            <div>Состав гильдии</div>
                <GuildmatesComponent guildmates={guildmates} createRaiderClick={createRaider}/>
            <Modal onClose={clear} open={!!createRaiderStatus}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">{createRaiderStatus}</Typography>
                <Button variant="contained" color="primary" onClick={clear}>Ok</Button>
                </Box>
            </Modal>
        </TableContainer>
    );
};
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../store/actions";
import Button from '@material-ui/core/Button';
import {Raid} from "../../models/raidEvent";
import styles from "../../pages/guild/guild-page.module.scss";
import {raidEventsSelector} from "../../selectors/raid-event-selector";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Select from "@material-ui/core/Select/Select";
import {Box, MenuItem, Modal, TextField, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {style} from "../../styles/modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const CreateRaidComponent: React.FC<any> = () => {
    const [raidDate, setRaidDate] = useState<Date | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [raidHours, setRaidHours] = useState<number | null>(null);
    const [raidMinutes, setRaidMinutes] = useState<number | null>(null);
    const [raidDateTimeComputed, setRaidDateTimeComputed] = useState<Date|null>(null);
    const [showDescription, setShowDescription] = useState<boolean>(false);
    const [id, setId] = useState<number | null>(null);

    const dispatch = useDispatch();
    const create = () => {
        let d = new Date(raidDate.setHours(raidHours, raidMinutes));
        setRaidDateTimeComputed(d);
        let newRaid: Raid = new Raid(d, description, id);
        console.log("создаем событие", newRaid);
        dispatch(Actions.raidEvent.createRaid.request(newRaid));
        setShowDescription(true);
    };

    const DataChange = (event) => {
        setRaidDate(new Date(event.target.value))
    };

    const DescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    const HoursChange = (event) => {
        setRaidHours(parseInt(event.target.value))
    };

    const MinutesChange = (event) => {
        setRaidMinutes(parseInt(event.target.value))
    };

    const IdChange = (event) => {
        setId(parseInt(event.target.value))
    };

    let createRaidStatus = useSelector(raidEventsSelector);
    let clear = () => {
        dispatch(Actions.raidEvent.clearCreateRaidEvent());
    };

    return (
        <>
            <div>
                <Box component="form">
                <p>Дата: <TextField id="filled-basic" variant="filled" size="small" defaultValue={null} type="Date" onChange={DataChange}/></p>
                <p>Id: <TextField id="filled-basic" label="Введите id" variant="filled" type="number" defaultValue={null} size="small" onChange={IdChange}/></p>
                <p>Час: <FormControl>
                    <Select defaultValue={"Не выбрано"} onChange={HoursChange}>
                    {["Не выбрано",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((n:number) =>
                        <MenuItem value={n}>{n}</MenuItem>)}
                </Select>
                </FormControl>
                </p>
                <p>Минуты: <FormControl>
                    <Select defaultValue={"Не выбрано"} onChange={MinutesChange}>
                    {["Не выбрано",0,5,10,15,20,25,30,35,40,45,50,55].map((n:number) =>
                        <MenuItem value={n}>{n}</MenuItem>)}
                </Select>
                </FormControl>
                </p>
                <p>Название: <TextField id="filled-basic" label="Введите название" variant="filled" size="small" onChange={DescriptionChange}/></p>
                </Box>
            </div>
            <div>
                {raidDateTimeComputed?.toString()}
            </div>
            <div>
                {showDescription ? description: null}
            </div>
            <Button variant="contained" color="primary" disabled={(description == null) ||
            (raidDate == null) ||
            (raidMinutes == null) ||
            (raidHours == null) ||
            (id == null) || (description == "")} onClick={create} title={'Создать событие'} startIcon={<AddBoxIcon/>}>
                Создать
            </Button>
            <Modal onClose={clear} open={!!createRaidStatus}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {createRaidStatus}
                    </Typography>
                <Button variant="contained" color="primary" onClick={clear}>Ok</Button>
            </Box>
            </Modal>
        </>
    )
};
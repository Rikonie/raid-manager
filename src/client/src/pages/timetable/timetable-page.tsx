import React, {useEffect, useState} from "react";
import {Calendar, momentLocalizer,} from "react-big-calendar";
import {Raid as RaidEvent} from "../../models/raidEvent";
import {Event as CalendarEvent} from "react-big-calendar"
import 'react-big-calendar/lib/sass/styles.scss';
import moment from 'moment'
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {eventSelector} from "../../selectors/raid-event-selector";
import {Box, Button, Modal, TextField, Typography} from "@material-ui/core";
import {style} from "../../styles/modal";
import styles from ".//timetable-page.module.scss";
import {CreateRaidComponent} from "../../components/create-raid/create-raid-component";
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';

const localizer = momentLocalizer(moment);

export const TimetablePage = () => {
    let events = useSelector(eventSelector) as RaidEvent[];
    let [openModal, setOpenModal] = useState<boolean>(false);
    let [selectedEvent, setSelectedEvent] = useState<RaidEvent| null>(null);
    let [deleteEventModal, setDeleteEventModal] = useState(false);
    let [confirmation, setConfirmation] = useState<string | null>(null);

    const getCalendarEvents = (events: RaidEvent[]) : CalendarEvent[] => {
        if(events){
        return events.map((e: RaidEvent) => {
            const end = new Date(e.raidDate.getTime());
            end.setHours(e.raidDate.getHours() + 3);
            return {
                allDay:false,
                title: e.name,
                start: e.raidDate,
                end: end,
                event: e
            } as CalendarEvent
        })}
        else return []
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(Actions.calendar.calendarOpened());
    }, [dispatch]);

    let modal = () => {
        setOpenModal(true)
    };

    let closeModal = () => {
        setOpenModal(false)
    };

    let deleteOpenModal = () => {
        setDeleteEventModal(true)
    };

    let deleteCloseModal = () => {
        setDeleteEventModal(false)
    };

    const setConfirmationChange = (event) => {
        setConfirmation(event.target.value)
    };
    let disabledButton = (confirmation) => {
        return confirmation != 'Удалить';
    };


    return (
        <div className={styles.content}>
            <span className={styles.createRaid}>
            <Button variant="contained" color="primary"
                    onClick={modal} startIcon={<AddBoxIcon/>}>
                Создать событие
            </Button>
            </span>
            <div className={styles.calendar}>
            <Calendar
                localizer={localizer}
                events={getCalendarEvents(events)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={($event: any)=>{setSelectedEvent($event.event)}}
            />
            <Modal open={!!selectedEvent} onClose={()=>setSelectedEvent(null)}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div>Название: {selectedEvent?.name}<br/>
                            Описание: {selectedEvent?.description}<br/>
                            Дата: {selectedEvent?.raidDate.toDateString()}<br/>
                            Начало: {selectedEvent?.raidDate.toTimeString()}<br/>
                        </div>
                        <Button variant="contained" color="primary"
                                onClick={deleteOpenModal} startIcon={<DeleteIcon/>}>
                            Удалить событие</Button>
                        <Button variant="contained" color="primary" onClick={()=>setSelectedEvent(null)}
                                className={styles.closeModal}>Закрыть</Button>
                    </Typography>
                </Box>
            </Modal>
                <span className={styles.description}>
                    Среда: 20:00 — 23:00 (героик) <br/>
                    Четверг: 20:00 — 23:00 (героик)<br/>
                    Суббота: 20:00 — 23:00 (фулл нормал)<br/>
                    <br/>
                    Сбор на РТ за 10-15 минут до начала!<br/>
                    РЛ — @Краколис (Анатолий Андреевич)<br/>
                    На неделе бывают спонтанные рейды в нормал, следите за игровым календарем и каналом guild-news!<br/>
                    По вопросам вступления можно обращаться к любому Офицеру онлайн.
                </span>
            </div>
            <Modal onClose={closeModal} open={openModal}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <CreateRaidComponent/>
                        <Button variant="contained" color="primary"
                                onClick={closeModal} className={styles.closeModal}>
                            Закрыть
                        </Button>
                    </Typography>
                </Box>
            </Modal>
            <Modal onClose={deleteCloseModal} open={deleteEventModal}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div>Вы уверены, что хотите удалить событие?<br/>
                        Для подтверждения введите в поле ниже слово "Удалить"
                            <p>
                                <TextField id="filled-basic" label="Введите Удалить" variant="filled" type="string"
                                           defaultValue={null} size="small" onChange={setConfirmationChange}/>
                            </p>
                        </div>
                        <Button variant="contained" color="primary"
                                disabled={disabledButton(confirmation)} startIcon={<DeleteIcon/>}>
                            Удалить
                        </Button>
                        <Button variant="contained" color="primary" onClick={deleteCloseModal} className={styles.closeModal}>Закрыть
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
};
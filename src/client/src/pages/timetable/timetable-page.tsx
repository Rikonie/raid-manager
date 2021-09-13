import React, {useEffect} from "react";
import {Calendar, momentLocalizer,} from "react-big-calendar";
import {Raid as RaidEvent} from "../../models/raidEvent";
import {Event as CalendarEvent} from "react-big-calendar"
import 'react-big-calendar/lib/sass/styles.scss';
import moment from 'moment'
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {eventSelector} from "../../selectors/raid-event-selector";


const localizer = momentLocalizer(moment);

export const TimetablePage = () => {
    let events = useSelector(eventSelector) as RaidEvent[];

    const getCalendarEvents = (events: RaidEvent[]) : CalendarEvent[] => {
        if(events){
        return events.map((e: RaidEvent) => {

            const end = e.raidDate;
            end.setHours(e.raidDate.getHours() + 3);
            return {
                allDay:false,
                title: e.description,
                start: e.raidDate,
                end: end,
            } as CalendarEvent
        })}
        else return []
    };
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(Actions.calendar.calendarOpened());
    }, [dispatch]);
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={getCalendarEvents(events)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />

        </div>
    )
};
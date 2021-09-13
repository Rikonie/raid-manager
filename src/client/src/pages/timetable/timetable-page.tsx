import React from "react";
import {Calendar, momentLocalizer,} from "react-big-calendar";

import 'react-big-calendar/lib/sass/styles.scss';
import moment from 'moment'

class Event {
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    resource?: any;

    constructor(title:string, start: Date, end: Date, allDay = false, resource: any) {
        this.title = title;
        this.start = start;
        this.end = end;
        this.allDay = allDay;
        this.resource =  resource;
    }
}

const localizer = momentLocalizer(moment);
const event : Event= new Event("sdfs", new Date(1631810400000), new Date(1631810400000+10800000), false, null );

export const TimetablePage = () => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={[event]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />

        </div>
    )
};
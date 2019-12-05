import React from 'react';
import './Calendar.css';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';


const Calendar = (props) => {
    return (
        <ScheduleComponent currentView='Month'>
    <Inject services={[Day,Week,WorkWeek,Month,Agenda]} />
     </ScheduleComponent>
    )
}

export default Calendar;
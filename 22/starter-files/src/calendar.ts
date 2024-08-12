
import { months, eventsData } from './data.js';
import { EventType, CalendarType } from './types';
const calendarBody = document.querySelector('#monthAndYear');

export const renderCalendar = (calendarObj: CalendarType) => {
    const monthAndYear = document.querySelector('#monthAndYear')!;
    const testYear = 2024;
    monthAndYear.innerHTML = `${months[0]} ${testYear}`;
    console.log(eventsData)
    const thisYearAndMonthEvents = eventsData.filter((el: EventType) => {

        return el ? el.date.getFullYear() === calendarObj.year 
                    && el.date.getMonth() === calendarObj.month : null;
    })
    console.log(thisYearAndMonthEvents)


    


}
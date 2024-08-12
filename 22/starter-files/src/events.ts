
import { eventsData, currentMonth, currentYear } from './data.js';
import { EventType, CalendarType } from './types';
import { dateComparer, renderAllEvents, getRandomNumberRange } from './services.js';
import {renderCalendar } from './calendar.js'



const eventsContainer: Element = document.querySelector<Element>("#eventsContainer")!;
const formElement: HTMLFormElement = document.querySelector<HTMLFormElement>("#addEvent")!;
const dateInput: HTMLInputElement = document.querySelector<HTMLInputElement>("#date")!
const titleInput: HTMLInputElement = document.querySelector<HTMLInputElement>("#title")!
const colorInput: HTMLInputElement = document.querySelector<HTMLInputElement>("#color")!

const onAddHandler = (event: Event) => {
    event.preventDefault();
    const eventFormObj: EventType = {
        id: getRandomNumberRange(1000),
        color: colorInput.value,
        date: new Date(dateInput.value),
        title: titleInput.value
    } 
    formElement.reset();
    eventsData.push(eventFormObj)
    eventsData.sort((a: EventType, b: EventType) => dateComparer(a, b))
    renderAllEvents(eventsData, eventsContainer)

}

const onLoadHandler = () => {
    eventsData.sort((a: EventType, b: EventType) => dateComparer(a, b))
    renderAllEvents(eventsData, eventsContainer)
    const calObj: CalendarType = {
        events: [],
        month: currentMonth,
        year: currentYear
    }
    renderCalendar(calObj);
}

formElement.addEventListener("submit", onAddHandler);
window.addEventListener("load", onLoadHandler)

import { eventsData, currentMonth, currentYear } from './data.js';
import { dateComparer, renderAllEvents, getRandomNumberRange } from './services.js';
import { renderCalendar } from './calendar.js';

const eventsContainer = document.querySelector("#eventsContainer");
const formElement = document.querySelector("#addEvent");
const dateInput = document.querySelector("#date");
const titleInput = document.querySelector("#title");
const colorInput = document.querySelector("#color");
const onAddHandler = (event) => {
    event.preventDefault();
    const eventFormObj = {
        id: getRandomNumberRange(1000),
        color: colorInput.value,
        date: new Date(dateInput.value),
        title: titleInput.value
    };
    formElement.reset();
    eventsData.push(eventFormObj);
    eventsData.sort((a, b) => dateComparer(a, b));
    renderAllEvents(eventsData, eventsContainer);
};
const onLoadHandler = () => {
    eventsData.sort((a, b) => dateComparer(a, b));
    renderAllEvents(eventsData, eventsContainer);
    const calObj = {
        events: [],
        month: currentMonth,
        year: currentYear
    };
    renderCalendar(calObj);
};
formElement.addEventListener("submit", onAddHandler);
window.addEventListener("load", onLoadHandler);

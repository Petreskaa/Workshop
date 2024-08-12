import { EventType } from './types';
import { getRandomNumberRange } from './services.js';


export const eventsData: EventType[] = [
    {
        id: getRandomNumberRange(1000),
        color: "red",
        date: new Date(2023, 0, 15),
        title: "Semester starts"
    },
    {
        id: getRandomNumberRange(1000),
        color: "green",
        date: new Date(2024, 0, 1),
        title: "New Year"
    },
    {
        id: getRandomNumberRange(1000),
        color: "blue",
        date: new Date(2024, 0, 20),
        title: "React kickoff"
    }
];

export const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

export const today = new Date();
export const currentYear = today.getFullYear();
export const currentMonth = today.getMonth();




export interface EventType {
    id: number;
    date: Date,
    title: string,
    color: string
}
export interface CalendarType {
    year: number,
    month: number,
    events: EventType[],
}
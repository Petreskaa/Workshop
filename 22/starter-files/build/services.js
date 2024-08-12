
export const dateComparer = (a, b) => {

    return (b.date.getFullYear() - a.date.getFullYear())
        || (b.date.getMonth() - a.date.getMonth())
        || (b.date.getDate() - a.date.getDate());
};

export const renderCardElement = (eventObj) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("event-in-list", "border");
    cardWrapper.innerHTML = `<div class="event-in-list" 
        style="border-left:5px solid ${eventObj.color}" >
        <div>${eventObj.title}</div>
        <div>${eventObj.date.toLocaleDateString("en-GB")}</div>
    </div>`;
    return cardWrapper;
};
export const renderAllEvents = (eventList, eventContainer) => {
    eventContainer.innerHTML = '';
    eventList.forEach((el) => eventContainer.appendChild(renderCardElement(el)));
};
export const getRandomNumberRange = (numRange) => Math.floor(Math.random() * numRange);

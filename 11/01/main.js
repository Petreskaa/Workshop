const createElementAndMutate = (elementType, elementText, parentElementClass, elementToChangeClass, elemText, elemColor) => {
 
    const domElement = document.createElement(elementType);
    domElement.innerText = elementText;

    const parentElement = document.querySelector(`.${parentElementClass}`)
    parentElement.appendChild(domElement);
    const oldElement = document.querySelector(`.${elementToChangeClass}`)
    if (oldElement !== undefined) {
        oldElement.innerText += elemText;
        oldElement.style.color = elemColor;
    }
}

const elemNew = "p";
const newElemText = "I am text created dynamically - function"
const parentElemClass = "count"
const oldElementClass = "text1"
const oldElemeMutatedText = " - added text"
const oldElemNewColor = 'res'

const createDOMElement = (elementType, elementText) => {
    const createdElement = document.createElement(elementType);
    createdElement.innerText = elementText;

    return createdElement;
}

const container = document.querySelector('.count');
const newElement = createDOMElement(elemNew, newElemText)
console.log(container);
console.log(newElement)
container.appendChild(newElement)
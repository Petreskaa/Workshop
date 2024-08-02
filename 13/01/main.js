
const userName = "james"
const userAge = 28;
const adultAge = 18;
const parentNode = "adultId"
const parentNodeSecondary = "section"



const createDomElement = (domElement, userName, isAdult) => {

    const createdElement = document.createElement(domElement);
    const message = `I am ${userName} and I am ${isAdult ? `adult`: `not an adult yet`}`;
    createdElement.innerText = message;

    return createdElement;
}

const checkAge = (userAgeInput, userNameInput, adultAgeInput, createDomFunction, parentSelector) => {
    const parentNode = document.getElementById(parentSelector);
    let domElement; 
    if (userAgeInput >= adultAgeInput) {
        console.log("is adult", userNameInput)
        domElement = createDomFunction('p', userNameInput, true)
    }
    else {

        console.log('not adult', userNameInput)
        domElement = createDomFunction('p', userNameInput, false)
    }

    parentNode.appendChild(domElement)
}
console.log(adultAge)
checkAge(userAge, userName, adultAge, createDomElement, parentNode)
checkAge(userAge, userName, adultAge, createDomElement, parentNodeSecondary)


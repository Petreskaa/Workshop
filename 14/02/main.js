let quotes = [
    "Only I can change my life..",
    "There is only one happiness in this life, to love and be loved",
    "Life is 10% what happens to you and 90% how you react to it.",
    "Smile in the mirror.",
    "Infuse your life with action.",
    "Change your life today",
    "The greatest gift of life is friendship, and I have received it.",
];

let authors = [
    "Patricia Aakhus",
    "Hans Aanrud",
    "Rachel Aaron",
    "Soazig Aaron",
    "Ben Aaronovitch",
    "Alexander Aaronsohn ",
    "Héctor Abad Faciolince",
];


let authorsReduced = [
    "Patricia Aakhus",
    "Hans Aanrud"
];


const btnElement = document.getElementById('btn');

const randomIndexGenerator = (arrarInput) => Math.floor(Math.random() * arrarInput.length);
const randomElement = (arrayInput, radnomIndex) => arrayInput[radnomIndex];

const getRandomElement = (arrayInput) => {
    const randomIndex = randomIndexGenerator(arrayInput)
    return randomElement(arrayInput, randomIndex)
}

const changeQuote = (authorsInput, quoutesInput) => {

    const quoteElement = document.getElementById('quote')
    const authorElement = document.getElementById('author')
    quoteElement.innerText = getRandomElement(quoutesInput)
    authorElement.innerText = getRandomElement(authorsInput)
}

const changeColor = () => {

    const randomRed = Math.floor(Math.random() * 256)
    const randomGreen = Math.floor(Math.random() * 256)
    const randomBlue = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

const onClickHandler = () => {
    changeQuote(authorsReduced, quotes);
    changeColor()
}


btnElement.addEventListener('click', onClickHandler)

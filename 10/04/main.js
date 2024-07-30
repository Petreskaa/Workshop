console.log("Exercises 4");
const userNumber = prompt("Please enter number between 1 and 5: ");	
if (isNaN(userNumber)) {
    console.log("Please enter a valid number format")
}
else {
    // proverka za tocen obseg na vrednosti
    const minValue = 1;
    const maxValue = 5;
    if (+userNumber >= minValue && +userNumber <= maxValue) {
        // da go najdeme soodvetniot element(po reden broj)
        const foundElement = document.getElementById(userNumber)
        foundElement.style.display = "none";
    }
    else {
        // kreiranje DOM element
        const paragraph = document.createElement("p");
        paragraph.innerText = `Please input a number between ${minValue} and ${maxValue}. Your number is: ${+userNumber}`;
        document.body.appendChild(paragraph)
    }
}

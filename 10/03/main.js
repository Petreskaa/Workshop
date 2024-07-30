console.log("Exercises 3");

const numOne = 13;
const numTwo = 13;
const squareElement = document.getElementById("square");
const pragraph = document.createElement("p");

if (numOne % 2 === 0 && numTwo % 2 === 0) {
    squareElement.style.backgroundColor = "blue";
}
let message = '';
if (numOne > numTwo) {
    message  = `Bigger number is ${numOne}`;
}
else if (numOne < numTwo) {
    message  = `Bigger number is ${numTwo}`;
}
else {
    message  = `Numbers are equal - ${numTwo}`;
    pragraph.style.color = 'white'
}
if (numOne % 3 === 0 && numTwo % 3 === 0) {
    pragraph.style.textDecoration = 'underline'
}
pragraph.textContent = message;
squareElement.appendChild(pragraph);
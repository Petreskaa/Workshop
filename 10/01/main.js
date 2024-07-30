console.log("Excercise 1")
const firstInput = prompt("Please enter first value");
const isNumber = isNaN(firstInput);

if (isNumber) {
    console.log("Please enter a valiv number")
}
else{
    const secondInput = prompt("Please enter a second value");
    if(isNaN(secondInput)){
        console.log("Please enter a valid number")
    }
    else {
        console.log("Do the comparison")
        const firstNumber = +firstInput;
        const secondNumber = Number(secondInput)
        const divElement = document.querySelector("#first")
        const pragraph = document.createElement("p");
        if (firstNumber > secondNumber) {
            pragraph.innerText = `The bigger of ${firstNumber} and ${secondNumber} is ${secondNumber}`
        }
        else if (firstNumber < secondNumber) {
            pragraph.innerText = `The smaller of ${firstNumber} and ${secondNumber} is ${firstNumber}`
        }
        else {
            pragraph.innerText = `Numbers, ${firstNumber} and ${secondNumber} are equal`
        }
        divElement.appendChild(pragraph);
    }
}
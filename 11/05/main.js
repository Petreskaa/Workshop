const listElement = document.querySelectorAll('li')
const listLenght = listElement.length;
const success = 'green';
const error = 'red';

// const num = "6as"; // to be from prompt - TODO ??
const num = prompt("Enter number:")


const colorElement = (numElement, elementCount, successColor, errorColor) => {
    // proverka a validno vnesen number format
    if (isNaN(numElement)) {
        console.log("Invalid number")
    }
    else {
        // iteracija niz elementite i menuvanje na boja ( vo dadeniot obseg)
        if (+numElement <= elementCount) {
            for (let i = 0; i < +numElement; i++) {
                listElement[i].style.color = successColor;
            }
        }
        // nadovor od obsegot, pogolem broj od toa o ima elementi
        else {
            // oboj gi site crveno
            for (let i = 0; i < elementCount; i++) {
                listElement[i].style.color = errorColor
            }
        }    
    }
};

colorElement(num, listLenght, success, error)
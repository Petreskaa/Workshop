const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');


const inputs = document.querySelectorAll('input');
const questions = document.querySelectorAll('.question');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const answer1 = document.getElementById('answer1-1');
const answer2 = document.getElementById('answer2-3');
const answer31 = document.getElementById('answer3-1');
const answer33 = document.getElementById('answer3-3');
const answer32 = document.getElementById('answer3-2');
const answer34 = document.getElementById('answer3-4');

const changeElementColor = (inputElement, inputColor) => inputElement.style.backgroundColor = inputColor;

const onSubmitHandler = () => {
    answer1.checked === true ? changeElementColor(question1, "green") : changeElementColor(question1, "red")
    answer2.checked === true ? changeElementColor(question2, "green") : changeElementColor(question2, "red")
    answer31.checked === true && answer33.checked === true && 
    answer32.checked === false && answer34.checked === false ?
        changeElementColor(question3, "green") :
        changeElementColor(question3, "red")
}

const onResetHandler =  () => {
    inputs.forEach(el => el.checked = false);
    questions.forEach(el => changeElementColor(el, "white"))
}

submitBtn.addEventListener('click', onSubmitHandler);
resetBtn.addEventListener('click', onResetHandler);


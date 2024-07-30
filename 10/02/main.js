console.log("Exercises 2");
const numberOne = 100;
const numberTwo = 20;
const numberThree = 5;
const numberFour = -10;
const numberFive = 153;

if (numberOne > numberTwo && numberOne > numberThree && numberOne > numberFour && numberOne > numberFive) {
    console.log(`largest number is: ${numberOne}`)
}
else if (numberTwo > numberOne && numberTwo > numberThree && numberTwo > numberFour && numberTwo > numberFive) {
    console.log(`largest number is: ${numberTwo}`)
}
else if (numberThree > numberOne && numberThree > numberTwo && numberThree > numberFour && numberThree > numberFive) {
    console.log(`largest number is: ${numberThree}`)
}
else if (numberFour > numberOne && numberFour > numberTwo && numberFour > numberThree && numberFour > numberFive) {
    console.log(`largest number is: ${numberFour}`)
}
else {
    console.log(`largest number is: ${numberFive}`)
}
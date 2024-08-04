const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const square = document.querySelector(".square");


const rotationInterval = 1000 
const rotationStep = 30;

let deg = 0;
let spinnerId;

const roatateElement = (elementInput, rotationDeg) => elementInput.style.transform = `rotate(${rotationDeg}deg)`

const onClickRotate = () => {
    console.log("rotate square");

    spinnerId = setInterval(() => {
        deg += rotationStep;
        console.log("deg: " + deg);
        roatateElement(square, deg)
    }, 
    [rotationInterval])
}

const onStopRotate = () => {
    console.log("stop rotation");
    console.log("spinner id:", spinnerId)
    clearInterval(spinnerId)
}

startBtn.addEventListener("click", onClickRotate)
stopBtn.addEventListener("click", onStopRotate)


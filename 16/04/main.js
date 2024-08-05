class Average {
    constructor(_firstNumber, _secondNumber) {
        this.firstNumber = _firstNumber;
        this.secondNumber = _secondNumber;
    };
    calAverage() {
        const averageNum = (this.firstNumber + this.secondNumber) / 2;
        return `The average value between ${this.firstNumber} and ${this.secondNumber} is ${averageNum}`
    }
}
const a = 12;
const b = 4
const c = 10;
const d = 5;

const avgFirst = new Average(a, b);
const avgSecond = new Average(c, d);
console.log(avgFirst)
console.log(avgFirst.calAverage())
console.log(avgSecond.calAverage())
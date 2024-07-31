console.log(12 / 10)
console.log(12 % 10)
console.log(Math.floor(12 / 10))

let tens;
let ones;

const maxValue = 22;
for (let i = 0; i <= maxValue; i++) {
    tens = Math.floor(i / 10);
    ones = i % 10;
    console.log(`The number ${i} has #${tens} and #${ones}`)
}
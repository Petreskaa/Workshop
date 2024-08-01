// Make a function which will take an array as an input argument.
// - Inside the function calculate the product of all positive numbers of that array.
// - Call the function 2 times with 2 different arrays which contain positive and negative numbers to
// test the function.

const numArr = [1, -10, 4, -8, 15, 3]
const numSecond = [9, -10, 5, 19, -3]

const calculatePositiveNumbers = (inputArr) => {
    let product = 1;
    const len = inputArr.length;
    for (let i = 0; i < len; i++) {
        if (inputArr[i] > 0) {
            product = product * inputArr[i];
        }
    }
    return product;
}

console.log(numArr)
const positiveNumProduct = calculatePositiveNumbers(numArr);
console.log(positiveNumProduct)
const positiveNumberSecond = calculatePositiveNumbers(numSecond)
console.log(numSecond)
console.log(positiveNumberSecond)

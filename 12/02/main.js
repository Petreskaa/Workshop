// - Make an array of numbers with 10 elements of your choice inside it.
// - Make another empty array.
// - Iterate through the first array and for each even/odd value of the elements
// change the elements with even/odd accordingly.
// E.g.
// arr1 = [1,5,10] ;
// arr2 = ["odd","odd","even"];

const numElements = [4, 1, 6, 13, 9, 190, 32, 31, 7, 55]


const checkPairNumbers = (inputArr) => {
    const len = inputArr.length;
    const pairedNumber = []; 
    for (let i = 0; i < len; i++) {
        inputArr[i] % 2 === 0 ? pairedNumber.push("even") : pairedNumber.push("odd");
    }
    return pairedNumber;
}

console.log(numElements)
const resultArray = checkPairNumbers(numElements);
console.log(resultArray)
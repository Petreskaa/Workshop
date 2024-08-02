const arr = [5, -3, 6, 7, -2, 1]
console.log(arr)

// step 2 - filter all negative elements and
const negativeNumberArray = arr.filter(el => el < 0);
console.log(negativeNumberArray)

// step 3
const convertedToPositive = negativeNumberArray.map(el => Math.abs(el));
console.log(convertedToPositive)

// step 4
// all positive from firat array
const positiveNumberArray = arr.filter(el => el > 0);
console.log(positiveNumberArray)

// step 5 - assemble all positive array
convertedToPositive.forEach(el => positiveNumberArray.push(el));

console.log(positiveNumberArray)


// da se konvertira se vo pozitivni vrednosti(doploniten primer)
// da go zapozime redosledot
const finalPositive = arr.map(el => Math.abs(el))
console.log('final all positive', finalPositive)

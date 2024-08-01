// Make an array of elements of your choice.
// - Find the position of a given element.
// - Print to the console, the element after the one you found the position of.
// e.g.
// Let arr = ["something", "iOS" , "Android", 444 , 666];
// for entering 444, it will print to the console 666.

const arr = ["something", "iOS" , "Android", "444" , "874"];
const userInput = "something";
const nextEl = 1; 


const findNextElement = (inputArray, elementItem, nextElementPosition) => {

    const elementIndex = inputArray.indexOf(elementItem); 
  
    if (elementIndex === -1) {
        return nextElement;
    }
    else {
        nextElement = inputArray[elementIndex + nextElementPosition];
        return nextElement;
    }
}

const elementAfter = findNextElement(arr, userInput, nextEl);
console.log(arr)
console.log(elementAfter)

if (elementAfter === undefined) {
    console.log("please provide valid input element")
}
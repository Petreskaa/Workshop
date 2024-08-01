// Make an array of names with 7 elements inside it.
// - Make another empty array.
// - Iterate through the first array, find the names which stay on an even position (0 is not even
// number) in the first array and add them in the second array.
// - Print each of the names inside the second array split with a coma.
// e.g.
// arr1= ["Bojan", "Marko", "Marija","Stefan","Elena"];
// arr2=["Marija","Elena"];
// console: Marija,Elena

        //     0         `1        2         3         4
        const arr1= ["Bojan", "Marko", "Marija","Stefan","Elena"];

        
        const checkNamePosition = (inputArr) => {

            const len = inputArr.length;
            const evenPositionNames = [];
        
            for (let i = 0; i < len; i++) {

                if (i % 2 === 0) {
                    evenPositionNames.push(inputArr[i]);
                }
            }

            return evenPositionNames;
        };
        
        console.log(arr1)
        const evenNames = checkNamePosition(arr1);
        console.log(evenNames)
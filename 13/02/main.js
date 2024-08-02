
    const number = "5544"

    const getNumbersLength = (numberInput) => numberInput.length;

    const truncateNumDividedByTen = (numberInput) => Math.trunc(numberInput / 10)

    const getEvenDigit = (numInput) => {
        const lastDigit = numInput % 10;
        return lastDigit % 2 === 0 ? lastDigit : 0;
    }

    
    const writeSumInDOM = (sumInput, domElement) => 
        document.createElement(domElement).innerText = `The sum is ${sumInput}`


    const calcSum = (numberInput) => {

        const numLen = getNumbersLength(numberInput)

        if (numLen === 4) {

            let sum = 0;
            let numElement = parseInt(numberInput);
            for (let i = 0; i < numLen; i++) {
                console.log('num', numElement)
                sum += getEvenDigit(numElement)
                numElement = truncateNumDividedByTen(numElement)                
            }

            console.log("sum is", sum)
            document.body.innerHTML += writeSumInDOM(sum, 'h1')

        }
        else {
            alert("please enter a 4 digit number")
        }
    }

    calcSum(number)

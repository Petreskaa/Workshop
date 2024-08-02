const amout = 1203
// 1000 kolku? -> 4 * 1000; 
// 500 kolku? -> 0 * 500 // 125
// 100 - kolku> -> 1 * 100 // 125
// 50 - kolku? -> 0 * 50 // 25
// 10 - kolku? -> 2 * 10 // 25
// 5 kolku? -> 1 * 5 // 5

// proveruv samo true/false
const isNumberValidForATM = (moneyAmount) => moneyAmount % 10 === 5 || moneyAmount % 10 === 0;


const createDomElement = (banknote_1000, banknote_500, banknote_100, banknote_50, banknote_10, banknote_5, sumInput) => {
    const element = document.createElement('p')
    const message = `Amount from withdraw for ${sumInput} would be
    ${banknote_1000} is 1000s
    ${banknote_500} is 500s
    ${banknote_100} is 100s
    ${banknote_50} is 50s
    ${banknote_10} is 10s
    ${banknote_5} is 5s`

    element.innerText = message;

    return element;
}

const checkBanknotes = (moneyInput) => {
    const isValidATM = isNumberValidForATM(moneyInput)
    const moneyCpy = moneyInput;
    if (isValidATM) {
        // logika za vrakjanje banknoti
        // deklarirame promenlivi
        let banknote_1000, banknote_500, banknote_100, banknote_50, banknote_10, banknote_5;

        // kolku 1000-ki ima
        banknote_1000 = Math.trunc(moneyInput / 1000)
        // reduciraj go pocetniot iznos
        moneyInput = moneyInput % 1000;

        // kolku 500-ki
        banknote_500 = Math.trunc(moneyInput / 500)
         // reduciraj go pocetniot iznos
        moneyInput = moneyInput % 500;

         // 100-ki
        banknote_100 = Math.trunc(moneyInput / 100)
         // reduciraj go pocetniot iznos
        moneyInput = moneyInput % 100;

        // 50-ki
        banknote_50 = Math.trunc(moneyInput / 50)
         // reduciraj go pocetniot iznos
        moneyInput = moneyInput % 50;

        // 10-ki
        banknote_10 = Math.trunc(moneyInput / 10)
         // reduciraj go pocetniot iznos
        moneyInput = moneyInput % 10;

        // 5-ki
        banknote_5 = Math.trunc(moneyInput / 5)


        document.body.appendChild(createDomElement(banknote_1000, banknote_500, banknote_100, banknote_50, banknote_10, banknote_5, moneyCpy));

    }
    else {
        alert("You cannot withdraw money that doesn't end with 0 or 5.")
    }
}


checkBanknotes(amout)

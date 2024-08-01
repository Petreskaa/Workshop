// Enter a name in prompt.
// A. Follow the steps below:
// - Make a function which will check whether the name starts with a vowel or a consonant.
// - If it starts with a vowel the function will return "Your name starts with a vowel", and if it starts
// with a consonant the function will return "Your name starts with a consonant".
// - Show the result in the console.
const vowels = ["a", "e", "i", "o", "u"]
const userName = "    IvAn";


const countConsVowels = (vowelsInput, nameInput) => {
    const flattenedName = nameInput.trim().toLowerCase();
    const nameLength = flattenedName.length;
    let numVowels = 0;
    let numCons = 0;
    for(let i = 0; i < nameLength; i++) {
        vowelsInput.includes(flattenedName[i]) ? numVowels += 1 : numCons += 1;
    }
    console.log("User name", flattenedName)
    console.log(`Num of vowels ${numVowels}, num of consonants ${numCons}`)
}

countConsVowels(vowels, userName)
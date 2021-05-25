/*
instructions of solution 2
1. given string - create empty string
2. loop through each character
3. return reversed
*/

const string = 'apple';

const reverseString = (text = '') => {
    if (text === '') return;

    const characterArray = text.split('');

    const arrayLength = characterArray.length; // 2
    const arrayReversed = [];
    for (let i = 0; i < arrayLength; i++) {
        const formula = (arrayLength - 1) - i;
        arrayReversed.push(characterArray[formula]);
        // (3 - 1) - 0 = [2]
        // (3 - 1) - 1 = [1]
        // (3 - 1) - 2 = [0]
    }

    return arrayReversed;
}

console.log(reverseString(string));

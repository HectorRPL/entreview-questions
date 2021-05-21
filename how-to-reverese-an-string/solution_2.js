/*
instructions of solution 2
1. given string - create empty string
2. loop through each character
3. return reversed
*/

const string = 'apple';



function reverseString(text = '') {
    if (text === '') return ;

    const arrayOriginal = ['a', 'b', 'c'];

    const arrayLength = arrayOriginal.length; // 2
    const arrayReversed = [];
    for (let i = 0; i < arrayLength; i++) {
        const formula = (arrayLength - 1) - i;
        arrayReversed.push(arrayOriginal[formula]);
        // (3 - 1) - 0 = [2]
        // (3 - 1) - 1 = [1]
        // (3 - 1) - 2 = [0]
    }

    return result;
}

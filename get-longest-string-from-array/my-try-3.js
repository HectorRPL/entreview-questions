const arrayOne = ['a', 'bb', 'ccc']; // get "ccc"
const arrayTwo = ['a', ['zz', 'yyyyy'], 'dd', 'ffff']; // get ""ffff""

const isLongerThan = (string, newString) => string.length < newString.length; // return true || false

let longestString = ''; // is important get out this
const getLongestString = (arr = []) => {
    arr.forEach(text => {
        // recursion !!!
        if (text instanceof Array) {
            getLongestString(text);
        }
        if (isLongerThan(longestString, text)) {
            longestString = text;
        }
    });
    return longestString;
};

const result1 = getLongestString(arrayOne);
const result2 = getLongestString(arrayTwo);
console.log(result1);
console.log(result2);

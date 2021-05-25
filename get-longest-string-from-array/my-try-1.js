// get the longest string from arrayOne and arrayTwo

const arrayOne = ['a', 'bb', 'ccc']; // get "ccc"
const arrayTwo = ['a', ['yy', 'zzzzzz'], 'dd', 'ffff']; // get ""ffff""

const isLongerThan = (string, newString) => string.length < newString.length; // return true || false

const getLongestString = (arr = []) => {
    let longestString = '';
    arr.forEach(text => {
        if (text instanceof Array) {
            text.forEach(value => {
                if (isLongerThan(longestString, value)) {
                    longestString = value;
                }
            });
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

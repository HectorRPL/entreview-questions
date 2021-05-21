function isPalindrome(word = '') {
    if (!!!word) return ;
    // convert the string to array
    const wordConvertedToArray = word.split('');

    // reverse the array
    const arrayReversed = wordConvertedToArray.reverse();

    // convert the array to string
    const arrayConvertedToString = arrayReversed.join('');

    // compare strings
    return word === arrayConvertedToString;
}

console.log(isPalindrome('abba')); // must be true
console.log(isPalindrome('hector')); // must be false

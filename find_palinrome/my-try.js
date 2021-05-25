function isPalindrome(word = '') {
    if (!!!word) return ;
    // convert the string to array
    const wordConvertedToArray = word.split(''); // ['h', 'e', 'c', 't', 'o', 'r]

    // reverse the array
    const arrayReversed = wordConvertedToArray.reverse();  // ['r', 'o', 't', 'c', 'e', 'h']

    // convert the array to string
    const arrayConvertedToString = arrayReversed.join(''); // rotceh

    // compare strings
    return word === arrayConvertedToString; // hector === rotceh => false
}

console.log(isPalindrome('abba')); // must be true
console.log(isPalindrome('hector')); // must be false

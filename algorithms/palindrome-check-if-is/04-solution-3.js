const isPalindrome = (word) => {
    const length = word.length;

    for (let i = 0; i < length / 2; i++) {
        if (word[i] !== word[length - i - 1]) {
            return false;
        }
    }

    return true;

}

console.log(isPalindrome('abba'))
console.log(isPalindrome('hector'))
console.log(isPalindrome('hannah'))

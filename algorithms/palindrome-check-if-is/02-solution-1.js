const palindrome = (str) => {
    const isPalindrome = str.split('').reverse().join('');
    console.log('solution 1: ', isPalindrome === str);
};
palindrome('hannah');

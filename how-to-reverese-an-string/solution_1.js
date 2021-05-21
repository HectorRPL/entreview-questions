/*
instructions of solution 1
1. given string - convert it into array
2. reverse it the array
3. turn the array back into string
*/

const string = 'apple';

// solved bu youtuber

const revString = (word = '') => { // hello World!
    // turn the string into array by split it
    const arr = word.split(''); // ['h','e','l','l','o', ' ', W','o','r','l','d','!']
    arr.reverse();  // ['!', 'd', 'l', 'r' ... etc]
    word = arr.join('');
    console.log(word);
};


// I improve the code of youtuber with 'data structures' of my course


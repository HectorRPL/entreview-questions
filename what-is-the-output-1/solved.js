// what is the output?

console.log(typeof typeof 1);


// the answer is 'string'
// is better if you read like this:
console.log(typeof (typeof 1));

// then...

// (typeof 1) => return 'number'

// then ...

// (typeof 'number') => return 'string' because the word 'number' is an string

const arr = [22, 55, 4, 100, 5, 2];

// sorted but with errors
const sorted = arr.sort();
console.log(sorted); // [100, 2, 22, 4, 5, 55]

// sorted
const sortedNumber = arr.sort((a, b) => a - b);
console.log({sortedNumber}); // [2, 4, 5, 22, 55, 100]

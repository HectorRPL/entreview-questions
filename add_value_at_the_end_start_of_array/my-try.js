// Must be: ['a', 'b', 'c', 'd', 'e', 'f']

var myArray = ['b', 'c', 'd', 'e'];

const addValueToStart = (value, array) => [...value, ...array];
const addValueToEnd = (array, value) => [...array, ...value];

const arrWithNewValeAtBegin = addValueToStart('a', myArray)
const arrWithNewValeAtEnd = addValueToEnd(arrWithNewValeAtBegin, 'f');

console.log(arrWithNewValeAtEnd);

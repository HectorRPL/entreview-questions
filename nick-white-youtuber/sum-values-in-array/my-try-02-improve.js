/*

Sum the values in the nex array

[5, 3, 2, 1, 7]

source:
https://youtu.be/_DvSIoQKBac
*/

const array = [5, 3, 2, 1, 7].reduce((previous, actual) => previous += actual);

console.log('Result: ', array);

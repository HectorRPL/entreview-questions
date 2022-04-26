/*
* I was thinking how to make this in a hash table
* */

const arr1 = [12345, 12345];
const arr2 = [23456, 23456];

const createArrayWithOneLevel = (arr = []) => arr
  .join()
  .split('')
  .map(num => parseInt(num))
  .filter(x => !isNaN(x));

const main = (arr1, arr2) => {
  const normalizedArr1 = createArrayWithOneLevel(arr1);
  const normalizedArr2 = createArrayWithOneLevel(arr2);
  return normalizedArr1.reduce((accum, number, idx, originalArr) => accum + (normalizedArr2[idx] - number), 0);
}

console.log(main(arr1, arr2));

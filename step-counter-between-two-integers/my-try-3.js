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

  const obj = {};
  normalizedArr1.forEach((number, idx, original) => obj[idx] = normalizedArr2[idx] - number);

  return Object
    .keys(obj)
    .reduce((acc, idx) => {
      return acc + obj[idx];
    }, 0);
}

console.log(main(arr1, arr2));

const arr1 = [12345, 12345];
const arr2 = [23456, 23456];

const stepCounter = (a, b) => {
  return b - a;
}

const splitDigits = (number) => {
  // convert '1234' string onto => [1, 2, 3, 4] numbers array
  const stringsArray = [...`${number}`];
  const arrayNumbers = [];
  for (let i = 0; i < stringsArray.length; i++) {
    const stringToNumber = parseInt(stringsArray[i]);
    arrayNumbers.push(stringToNumber);
  }
  return arrayNumbers;
};

const normalizeArray = (array = []) => {
  // convert [1234, 4321] onto => [ [1,2,3,4] [4,3,2,1] ]
  const length = array.length;
  const normalizedArray = [];

  for (let i = 0; i < length; i++) {
    normalizedArray.push(splitDigits(array[i]));
  }
  return normalizedArray;
}

const counter = (numberA, numberB) => {
  // console.log(`numberB: ${numberB} - numberA: ${numberA} = ${numberB - numberA}`);
  return numberB - numberA;
}

const main = (array1 = [], array2 = []) => {
  const normalizedArray1 = (normalizeArray(array1));
  const normalizedArray2 = (normalizeArray(array2));
  let resultSteps = 0;
  const length = array1.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < normalizedArray1[i].length; j++) {
      const numberA = normalizedArray1[i][j];
      const numberB = normalizedArray2[i][j];
      const steps = counter(numberA, numberB);
      resultSteps = resultSteps + steps;
    }
  }
  return resultSteps;
}

console.log(main(arr1, arr2));

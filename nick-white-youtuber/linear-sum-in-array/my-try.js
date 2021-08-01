/*

arr = [2, 5, 8, 7, 13, 17]
num = 7
ans = 3


source:
https://youtu.be/_DvSIoQKBac
*/

const arrayNumbers = [2, 5, 8, 7, 13, 17];
const findNumber = (numberToFind, numbers) => {
    const length = numbers.length;
    let numberFoundInArrayPosition = null;
    for (let i = 0; i < length; i++) {
        if (numberToFind === numbers[i]) {
            numberFoundInArrayPosition = [i];
            break;
        }
    }
    return numberFoundInArrayPosition;
}

const fondNumber = findNumber(7, arrayNumbers);
console.log('Result: ', fondNumber);


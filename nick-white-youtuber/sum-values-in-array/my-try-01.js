/*

Sum the values in the nex array

[5, 3, 2, 1, 7]

source:
https://youtu.be/_DvSIoQKBac
*/

const array = [5, 3, 2, 1, 7];

const sum = (numbers) => {
    const length = numbers.length;
    let result = 0; // [my error] I not initialized this let, I was "let result". This is NaN in result
    for (let i = 0; i < length; i++) {
        console.log(result);
        result += numbers[i];
    }

    return result;
};

const addedNumbers = sum(array);
console.log('Result: ', addedNumbers);

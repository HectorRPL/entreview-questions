const fizzBuzz = (numbers = []) => {
    const length = numbers.length;
    for (let i = 0; i < length; i++) {

        const fizz = numbers[i] % 3 === 0;
        const buzz = numbers[i] % 5 === 0;

        if (fizz) {
            console.log(numbers[i], 'FIZZ');
        }

        if (buzz) {
            console.log(numbers[i], 'BUZZ');
        }

        if (fizz && buzz) {
            console.log(numbers[i], 'FIZZ BUZZ');
        }
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const printFizzBuzz = fizzBuzz(numbers);

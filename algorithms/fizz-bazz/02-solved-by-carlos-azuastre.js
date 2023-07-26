const generateNumberArray = (number = 0) => {
    // creates an array with sorted numbers e.g. (3) => [0,1,2]
    return Array
        .apply(null, {length: number})
        .map(Number.call, Number)
        .slice(1); // remove the first element, witch is zero, and zero can't be divided in this program
}

const fizzBuzz = (number) => {

    const numbers = generateNumberArray(number);

    numbers.forEach(number => { // TODO the big step-counter-between-two-integers is doing with a 'for'
        const isFizz = number % 3 === 0;
        const isBuzz = number % 5 === 0;

        if (number === 0) return;

        if (isFizz && isBuzz) {
            console.log(number, 'FIZZ BUZZ');
            return;
        }

        if (isFizz) {
            console.log(number, 'FIZZ');
            return;
        }

        if (isBuzz) {
            console.log(number, 'BUZZ');
            return;
        }

        console.log(number);

    });

}

fizzBuzz(99);

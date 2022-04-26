/*
rest operator
*/

const filter = (...numbers) => {
    return numbers.filter(number => number === 1);
}

const result = filter(1, 2, 3);



console.log('RESULT => ', result);


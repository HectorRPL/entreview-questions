const numMax = 100



const fizzBuzz = (numMax) => {

    const isFizz = (num) => num % 3 === 0
    const isBuzz = (num) =>num % 5 === 0

    for (let i = 1; i <= 100; i++) {
        if (isFizz(i)) console.log('Fizz', i);
        if (isBuzz(i)) console.log('Fizz', i);
        if (isBuzz(i) && isBuzz(i)) console.log('FizzBuzz', i);
    }
}

console.log(fizzBuzz(numMax))
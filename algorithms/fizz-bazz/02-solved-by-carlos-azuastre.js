const n = 15;

const fizzBuzz = (number) => {
  // generate array
  const numbers = [];
  for (let i = 0; i < number + 1; i++) {
    numbers.push(i);
  }

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


fizzBuzz(n);

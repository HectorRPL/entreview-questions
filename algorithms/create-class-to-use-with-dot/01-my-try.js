class SumTwoNumbers {

  constructor(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }

  sum() {
    return this.numberOne + this.numberTwo;
  }

}

const main = () => {

  const sumClass = new SumTwoNumbers(1, 2);

  const arrayOne = Array.from(new Set().add(1).add(2)).sumClass();
  console.log(arrayOne);
}

main();

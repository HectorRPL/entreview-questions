const sum = (numberOne, numberTwo) => numberOne + numberTwo
class SumTwoNumbers {

  constructor(numberOne, numberTwo) {
    this.numberOne = numberOne
    this.numberTwo = numberTwo
  }

  sum() {
    return sum(this.numberOne, this.numberTwo)
  }

}

const main = () => {

  const sum = new SumTwoNumbers(1, 2).sum() // output: 3

  const arrayOne = [...Array.from(new Set().add(1).add(2))] // Set: almacenar valores únicos de cualquier tipo,
      .reduce((previousValue, currentValue) => previousValue +currentValue)
}

main()

const sum = (numberOne, numberTwo) => numberOne + numberTwo
const mul = (numberOne, numberTwo) => numberOne * numberTwo

class SumTwoNumbers {
    constructor(numberOne, numberTwo, mathOperation) {
        this.numberOne = numberOne
        this.numberTwo = numberTwo
        this.mathOperaion = mathOperation
    }

    operation() { // before sum, now is more flexible and reusable
        return this.mathOperaion(this.numberOne, this.numberTwo)
    }
}


const sumTwoNumbers = new SumTwoNumbers(2, 3, sum).operation() // output: 5
const mulTwoNumbers = new SumTwoNumbers(2, 3, mul).operation() // output: 6


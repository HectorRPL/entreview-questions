/*
An accounting application under
development uses the following
TaxCalculator class to calculate
payable tax:
*/

class TaxCalculator {
  static taxRate = 10;

  constructor(grossIncome, deduction) {
    this.grossIncome = grossIncome;
    this.deduction = deduction;
  }

  getPayableTax() {
    console.log('TaxCalculator.taxRate -> ', TaxCalculator.taxRate); // :10
    return (TaxCalculator.taxRate / 100) * (this.grossIncome - this.deduction);
  }
}

console.log('new TaxCalculator -> ', new TaxCalculator(1000, 100).getPayableTax()); // :90
console.log('TaxCalculator.taxRate -> ', TaxCalculator.taxRate); // :10
console.log('TaxCalculator.taxRate -> ', new TaxCalculator().taxRate); // : Static member is not accessible
// console.log(TaxCalculator.getPayableTax()); // :error


/*
Select all the correct statements for the above code.

[ x ] The following code will throw an error
  TaxCalculator.getPayableTax()
[ x ] The following code will return a payable tax of 90:
  (new TaxCalculator(1000, 100)).getPayableTax();
[   ] Modifying the grossIncome and deduction properties of one TaxCalculator instance will modify the properties for other instances as well
[   ] Accessing TaxCalculator.taxRate in getPayableTax will throw an error.
[ x ] Code outside the TaxCalculator class can access taxRate using TaxCalculator.taxRate
*/

/*
Learnings
- Static property is like a JAVA
- If you want to set taxRate immutable you need to do this;

      // wrong
      Object.freeze(TaxCalculator.taxRate);
      TaxCalculator.taxRate = 9;
      console.log(TaxCalculator.taxRate); // :9

      // success
      Object.freeze(TaxCalculator);
      TaxCalculator.taxRate = 9;
      console.log(TaxCalculator.taxRate); // :10

- This is "TaxCalculator.getPayableTax()" is stupid because you need to instantiate with new and set () after class
  The correct is:
    new TaxCalculator().getPayableTax();

- if taxRate doesn't have static the TaxCalculator.taxRate returns:
      TaxCalculator.taxRate ->  undefined
      new TaxCalculator ->  NaN
      TaxCalculator.taxRate ->  undefined

  All methods are ruined...
  If you want ti fix without static, you need to replace "TaxCalculator." by "this." instead
  And if you want to print taxRate, you need to instantiate the class like this:

    new TaxCalculator().taxRate)

*/


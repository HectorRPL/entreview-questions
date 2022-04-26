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
    return (TaxCalculator.taxRate / 100) * (this.grossIncome - this.deduction);
  }
}

/*
Select all the correct statements for the above code.

[   ] The following code will throw an error

  TaxCalculator.getPayableTax()

[   ] The following code will return a payable taz of 90:

  (new TaxCalculator(1000, 100)).getPayableTax();

[   ] Modifying the grossIncome and deduction properties of one TaxCalculator instance will modify the properties for other instances as well

[   ] Accessing TaxCalculator.taxRate in getPayableTax will throw an error.

[   ] Code outside the TaxCalculator class can access taxRate using TaxCalculator.taxRate

*/


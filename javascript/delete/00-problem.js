// Q47. What will be the output of the following code?

var employee = {
  company: 'xyz'
}

var emp1 = Object.create(employee);
delete emp1.company
console.log(emp1.company);

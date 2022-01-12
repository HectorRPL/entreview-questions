// https://www.youtube.com/watch?v=frm0CHyeSbE
// functions can be received as parameters

const operation = (num1, num2, callback) => {
  return callback(num1, num2);
}

operation(1, 3, (a, b) => a + b); //  4
operation(1, 3, (a, b) => a * b); //  3
operation(1, 3, (a, b) => a - b); // -2



function getFactorial(number) {
  if (number === 0) return 1;
  // 4 = 4 x 3 x 2 x 1
  return number * getFactorial(number - 1);
}

console.log(getFactorial(4)); // 24

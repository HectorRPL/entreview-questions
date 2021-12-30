function factorial(x) {
  if (x === 0) return 1;
  // 4 x 3 x 2 x 1
  return x * factorial(x - 1);
}

console.log(factorial(4)); // 24

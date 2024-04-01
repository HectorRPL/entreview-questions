const operation = {
    'sum': (a, b) => a + b,
    'res': (a, b) => a - b,
    'div': (a, b) => a / b,
    'mul': (a, b) => a * b
}

console.log('2 + 1 = ', operation['sum'](2, 1));
console.log('2 - 1 = ', operation.res(2, 1));
console.log('2 / 1 = ', operation.div(2, 1));
console.log('2 x 1 = ', operation['mul'](2, 1));
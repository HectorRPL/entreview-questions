const products = [
  {id: '1', name: 'pants', price: 1},
  {id: '2', name: 'shoes', price: 2},
  {id: '3', name: 'shirt', price: 3},
];

function getExpensiveProducts(arr = []) {
  return arr.filter(value => value.price >= 2);
}

function getChipperProducts(arr = []) {
  return arr.filter(value => value.price < 2);
}

const expensiveProducts = getExpensiveProducts(products);
console.log({expensiveProducts});

const chipperProducts = getChipperProducts(products);
console.log({chipperProducts});

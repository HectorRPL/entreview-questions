const products = [
    {id: '1', name: 'pants', price: 1},
    {id: '2', name: 'shoes', price: 2},
    {id: '3', name: 't-shirt', price: 3},
];

const isChip = ({price}) => price < 2;
const isExpensive = (product) => !isChip(product.price);


const chipProducts = products.filter(isChip);
const expensiveProducts = products.filter(isExpensive);
console.log({chipProducts});
console.log({expensiveProducts});

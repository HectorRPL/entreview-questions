const array1 = [
  {name: 'foo'},
  {name: 'bar'},
  {name: 'baz'},
];

const array2 = new Array(array1.length).fill({});

array2.forEach((obj, index) => {
  obj.name = array1[index].name;
  obj.position = index;
});

const array3 = array1.map((obj, index) => ({
  ...obj,
  position: index,
}));

const array4 = array1.slice();

array4.forEach((obj, index) => {
  obj.position = index;
});

console.log('array1: ', array1); // ?
console.log('array2: ', array2); // ?
console.log('array3: ', array3); // ?
console.log('array4: ', array4); // ?




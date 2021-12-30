// What will this code print?

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  ...obj,
  a: 0,
  b: -1,
};

console.log(obj2.a, obj2.b);
console.log(obj);
console.log(obj2);



// a) 0 2
// b) undefined
// c) 1 2
// d) Nothing, it will throw an error





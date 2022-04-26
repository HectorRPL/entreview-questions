function crateCounter() {
 let counter = 0;
 return function increase() {
  counter = counter + 1;
  return counter;
 }
}

const counter1 = crateCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());



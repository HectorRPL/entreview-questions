function crateCounter() {
 let counter = 0;
 setTimeout(() => counter = 100, 5000); // this is a closure too because counter is inside of the function

 return function increase() {
  counter = counter + 1;
  return counter;
 }
}

const counter1 = crateCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
// 5 seconds later
console.log(counter1()); // 101
console.log(counter1()); // 102


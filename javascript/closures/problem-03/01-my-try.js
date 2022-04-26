let f = () => {
  let i = 1;
  let j = 2;
  return () => {
    console.log(i);
    console.log(j);
  }
}

console.dir(f()); // [Function (anonymous)]
console.log(f()); // [Function (anonymous)]

const myTry1 = f();
myTry1();

/*
functions in JS is an object, in fact all in javascript is an object
All inherit from Object class
*/

// Classic function
const sayHello = (name) => {
  return 'Hello ' + name;
}

console.log(sayHello('Anonymous'));

const a = 'Hey, ';
function global() {
  const b = 'Whats ';
  function local() {
    const c = 'up!';
    return a + b + c;

  }

  return local;
}

console.log(global()); // [Function: local]
console.log(global()()); // Hey, Whats up!
const closure = global();
closure(); // Hey Whats up!





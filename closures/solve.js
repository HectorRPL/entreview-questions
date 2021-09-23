function sayHello(name) {
 return function (to) {
  console.log(`${name} ${to}`);
 }
}


sayHello('hello')('hector');

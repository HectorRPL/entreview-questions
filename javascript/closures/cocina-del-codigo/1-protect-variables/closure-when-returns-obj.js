function crateCounter() {
 let counter = 0;
 return { // is object, yes, but nested functions, all to access to variable in superior scope.
  increase: () => { // closure
   counter = counter + 1;
   return counter;
  },
  decrease: function () { // closure
   counter = counter - 1;
   return counter;
  },
  getValue: function () { // closure
   return counter;
  }
 }
}

// Counter1 is not a function now. Now is a object
const counter1 = crateCounter();
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.decrease());
console.log(counter1.getValue());

/*
API (de un objecto)
La interfaz que tiene un objeto para interactuar con
el mismo. Qué métodos podemos invocar sobre ese
objecto y a qué propieaddse internas nos permite
acceder.


Las clausuras son muy buenas para construir estas
APIs. Porque nos indican de que manera podemos
interactuar con un objecto pero protegiendo las
variables internas.
Es imposible hacer lo siquiente:

counter1.counter = 1000;

*/

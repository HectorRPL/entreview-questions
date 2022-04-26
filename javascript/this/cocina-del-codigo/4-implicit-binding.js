'use strict'

const human = {
  name: 'Sacha',
  sayHello: function () {
    console.log(`My name is ${this.name}!`);
  },
  brother: {
    name: 'Erick',
    sayHello: function () {
      console.log(`I am the brother, my name is ${this.name}!`);
    },
  },
}

human.sayHello(); // My name is Sacha!
human.brother.sayHello(); // Me, the brother, my name is Erick!

/*
** this es el valor del objeto a la izquierda del punto.
Fue cuando vi a Juan usar el this por primera vez
*/

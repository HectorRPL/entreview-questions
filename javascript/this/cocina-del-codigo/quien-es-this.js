'use strict'

const human = {
  name: 'Sacha',
  twitter: '@sacha',
  sayHello: function () {
    function followMe() {
      console.log(`Follow me: @${this.twitter}!`); // Follow me: @undefined! => SOLVE
    }

    console.log(`My name is ${this.name}!`); // My name is Sacha!
    followMe(); // ***
  },
}

human.sayHello(); //


/*
***
no hay punto y un objeto antes de la invocación? => NO,
entonces no aplica el enlazamiento implícito,
sino el enlazamiento por defecto

*/

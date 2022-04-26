'use strict'

const human = {
 name: 'Sacha',
 twitter: '@sacha',
 sayHello: function () {
  function followMe() {
   console.log(`Follow me: @${this.twitter}!`); // Follow me: @undefined! ==(
  }

  console.log(`My name is ${this.name}!`); // My name is Sacha!
  followMe(); // ***
 },
}

const betterHuman = {
 name: 'Sacha',
 twitter: '@sacha',
 sayHello: function () {
  const followMe = () => { // con arrow function we solve and we passed this, const le da el this
   console.log(`Follow me: @${this.twitter}!`); // Follow me: @@sacha! =)
  }
  console.log(`My name is ${this.name}!`); // My name is Sacha!
  followMe(); // ***
 },
}

// cuidado con arrow function
const otherBadHuman = {
 name: 'Sacha',
 twitter: '@sacha',
 sayHello: () => { // Dont use arrow function, because this is global
  const followMe = () => { // con arrow function we solve and we passed this, const le da el this
   console.log(`Follow me: @${this.twitter}!`); // Follow me: @@sacha! =)
  }
  console.log(`My name is ${this.name}!`); // My name is Sacha!
  followMe(); // ***
 },
}

// cuidado con arrow function
class BadHumanClass {

 constructor(name) {
  this.name = name;
  // AGREGA ESTO PARA ESTAR FUERTEMENTE ENLAZADO:
  // es común en el constructor enlazar todos
  // los métodos de instancia o almenos los que
  // se pasan como callbacks después
  this.sayHello = this.sayHello.bind(this); // ***
 }

 sayHello() { // Los métodos de instancia no están fuerte enlazados a los obj que creemos
  console.log(`My name is ${this.name}!`);
 }
}

class GoodHumanClass {

 constructor(name) {
  this.name = name;
 }

 sayHello = () => {
  console.log(`My name is ${this.name}!`);
 }
}

const sacha = new BadHumanClass('Sacha');
const hec = new BadHumanClass('Hec');

human.sayHello(); // error
betterHuman.sayHello(); // success
otherBadHuman.sayHello(); // error
hec.sayHello(); // success
// existe este plugin
// https://www.npmjs.com/package/babel-plugin-transform-class-property-arrow-functions


/*
Si bien estan delimitados por llaves, los objetos no crean nuevos objetos.
*/

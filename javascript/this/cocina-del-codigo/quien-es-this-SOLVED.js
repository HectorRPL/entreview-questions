'use strict'

const human = {
  name: 'Sacha',
  twitter: '@sacha',
  sayHello: function () {
    console.log(`My name is ${this.name}!`); // My name is Sacha!
    this.followMe();
  },
  followMe: function () {
    console.log(`Follow me: @${this.twitter}!`); // Follow me: @@sacha!
  }
}

human.sayHello(); // OK

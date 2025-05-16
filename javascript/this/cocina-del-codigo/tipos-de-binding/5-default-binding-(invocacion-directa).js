/*
// 'use strict'
function greet() {
    console.log(`Hello, ${this.name}!`);
}

const name = 'John';
greet(); // Output: Hello, undefined! (In strict mode it will throw an error)

// Se comenta por que afecta el ejemplo que sigue
*/

// 'use strict';
function quienSoy() {
    console.log('Hola, yo soy ' , this);
}

quienSoy() // con 'use strict' Hola, yo soy undefined




// en modo strict las varibles quedan realmente sueltas
// key: no usar this
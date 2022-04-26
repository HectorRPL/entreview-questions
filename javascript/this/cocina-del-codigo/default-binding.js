// invocación directa


function howIamWithoutUseStrict() { // Normal function. NO arrow function
  console.log(`Hello, I am ${this}`);
}

howIamWithoutUseStrict(); // this = window in navigators, global in nodejs global


'use strict'

function howIam() { // Normal function. NO arrow function
  console.log(`Hello, I am ${this}`);
}


howIam(); // Hello, I am undefined => en modo estricto las funciones sueltas quedan realmente sueltas

// ** Si se usa modules 2015 import export el modo estrito viene habilitado por defecto.

// ** No usar this en las funciones globales porque no va estar definido.


'use strict'

function howIamWithWindow() {
  console.log(`Hello, I am ${window}`); // Si quieres referirte al objeto global entonces mejor escribe window
}

howIamWithWindow() //

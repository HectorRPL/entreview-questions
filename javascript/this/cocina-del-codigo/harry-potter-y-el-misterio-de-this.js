const harry = {
  name: 'Harry',
  sayHello: function () {
    console.log(`My name is ${this.name}`); // **
  }
}

/*
** this es el objeto que está ejecutando la función,
   si vemos undefined es porque 'ese objecto' no
   tiene la propiedad nome

*/


harry.sayHello(); // My name is Harry

// [error]

const sayHello = harry.sayHello();
sayHello(); // My name is undefined // sayHello is not a function


// [error] El efecto es el mismo que el caso anterior

/*
const button = document.getElementById('MyButton');
button.addEventListener('click', harry.sayHello);  // My name is undefined
*/




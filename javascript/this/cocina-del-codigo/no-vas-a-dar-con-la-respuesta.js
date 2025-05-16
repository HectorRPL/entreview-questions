// hasta no ejecutara y mandarle un porámetro no hay forma de saber a quien va a saludar esa función
function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}



// ejemplo 2
function saludar(nombre) {
    console.log(`Hola ${this.nombre}`)
}

const yo = {
    nombre: 'Hector',
    saludar: function () {
        console.log(`Hola, yo soy ${this.nombre}`)
    }
}

// error comun 1
let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    },
}
let sayName = dog.sayName
sayName() // undefined

// solución let sayName = dog.sayName.bind(dog)

// error comun 2 eventos

const harry = {
    nombre: 'Harry',
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const boton = document.getElementById('miBoton')
boton.addEventListener('click',harry.saludar) // undefined


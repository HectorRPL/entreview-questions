const main = (number = 0) => {

    if (number === 0) return console.log('Zero is not allowed')

    ///// Array.apply /////

    const applyMethodTest1 = Array.apply(null, {length: number}) // => [undefined, undefined, undefined]

    // Array.apply no se usa comúnmente para crear arrays con números secuenciales.
    // Sin embargo, es posible usarlo de la siguiente manera:
    const createArray = (number) => {
        return Array.apply(null, Array(number)).map((_, index) => index + 1);
    }

    // new Set
    const applyMethodTest2 = new Set() // => { }
    applyMethodTest2.add(3).add(4) // => { 3, 4 }

    // La clase Set en JavaScript se utiliza para almacenar valores únicos de cualquier tipo,
    // lo que significa que no puede contener duplicados
    const withNewSet = (number) => {
        return [...new Set(Array(number).keys())].map(i => i + 1)
    }

    const arrayNumbers = Array.from(applyMethodTest2) // => [ 3, 4 ] // you can set this: [...applyMethodTest2]


    // form 2
    // esta forma de utilizar map es bastante inusual
    // y podría resultar confusa para quienes lean el código,
    // ya que no es una forma convencional de utilizar map.
    // Se prefieren formas más claras y legibles de lograr el mismo resultado.

    // Cuando usamos .map() en el array [1, 2, 3], le pasamos dos argumentos a map:
        // El primer argumento es una función de retorno de llamada que será llamada en cada elemento del array.
        // En este caso, estamos pasando Number.call, lo que significa que queremos llamar a Number con el contexto de Number.call.

        // El segundo argumento es el contexto en el que se ejecutará la función de retorno de llamada.
        // En este caso, pasamos simplemente Number, lo que significa que queremos usar el contexto de Number.

    // Number.call es un método estático de la función Number
    // que se utiliza para llamar a la función Number con un contexto específico.
    // En este caso, se está utilizando el contexto global.
    const test = [1, 2, 3].map(Number.call, Number) // => [ 0, 1, 2 ]


    const conFor = (number) => {
        const result = [];
        for (let i = 1; i <= number; i++) {
            result.push(i);
        }
        return result;
    }

    const conArrFrom = (number) => {
        return Array.from({length: number}, (_, index) => index + 1);
    }

    const conPrototypeMap = (number) => {
        return Array(number).fill(undefined, undefined, undefined).map((_, index) => index + 1);
    }

    const conPrototypeKeys = (number) => {
        return [...Array(number).keys()].map(i => i + 1);
    }
}

main(5);



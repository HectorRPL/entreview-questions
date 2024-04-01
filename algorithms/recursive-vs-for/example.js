const arr = [1, 2, 3, 4]


// Al convertir el procesamiento del primer for en una promesa,
// estás permitiendo que se ejecute de forma asíncrona,
// lo que significa que no bloqueará la ejecución del segundo for.
// Esto permite que ambos procesos se ejecuten simultáneamente en hilos separados,
// siempre y cuando estén en contextos separados

//  JavaScript en un navegador web tiene un modelo de concurrencia basado en un solo hilo de ejecución,
//  lo que significa que solo puede ejecutar una tarea a la vez en el hilo principal de ejecución.
//  Esto incluye la ejecución de JavaScript en la página,
//  el manejo de eventos del usuario y las operaciones de renderizado.
//
// Cuando hablamos de asincronía en JavaScript, nos referimos a la
// capacidad de realizar operaciones no bloqueantes mediante el uso de
// funciones como setTimeout, setInterval, fetch, Promise, etc.
// Estas funciones permiten que ciertos bloques de código se
// ejecuten en un momento posterior, una vez que se cumplan ciertas
// condiciones (como el tiempo de espera, la finalización de una solicitud de red, etc.).
//
// Por lo tanto, aunque no se están ejecutando en hilos separados
// en el sentido tradicional (como en lenguajes de programación con múltiples hilos de ejecución),
// la asincronía en JavaScript permite que ciertas tareas se
// ejecuten de manera concurrente o paralela en relación con
// otras tareas en el programa, lo que da la impresión de ejecución simultánea.

const printNumbersAsyncWithPromise = (arr) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                console.log(arr[i]);
                if (i === arr.length - 1) {
                    resolve('Fin'); // Resolvemos la promesa cuando se ha impreso el último número
                }
            }, 0);
        }
    });
}

function printArray(arr, index = 0) {

    if (index >= arr.length) return // detener

    console.log(arr[index])
    printArray(arr, index + 1) // Llamada recursiva para imprimir el siguiente elemento
}

printNumbersAsyncWithPromise([...Array(100).keys()].map(i => (i + 1).toString()))
    .then((res) => console.log('Todos los números han sido impresos => ' + res))

printArray(arr)

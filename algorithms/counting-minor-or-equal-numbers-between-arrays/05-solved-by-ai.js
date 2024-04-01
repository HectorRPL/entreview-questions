const counterMaxes = (num = [], maxes = []) => {
    const sortedNum = num.sort((a, b) => a - b)

    // Complejidad temporal
    // ordenamiento del primer array y la búsqueda binaria para cada elemento del segundo array
    // O((n + m) * log(n))
    // n = longitud del primer array
    // m = longitud del segundo array.

    const result = []
    for (let i = 0; i < maxes.length; i++) {
        const maxVal = maxes[i]
        let count = 0 // número de elementos en el array sortedNum que son menores o iguales a maxVal
        let left = 0 //  índice izquierdo del subarray en el que estamos buscando
        let right = sortedNum.length - 1 //  índice derecho del subarray en el que estamos buscando

        // Búsqueda binaria para encontrar la posición de maxVal en sortedNum
        while (left <= right) { // mientras left sea menor o igual a right, lo que significa que todavía tenemos elementos en el subarray en el que estamos buscando.
            const mid = Math.floor((left + right) / 2) // Calculamos el índice medio del subarray actual.

            // Comparamos el valor en el índice medio con maxVal.
            // Si el valor en el medio es menor o igual a maxVal,
            // significa que todos los elementos antes del medio también
            // son menores o iguales a maxVal.
            // Por lo tanto, actualizamos count y ajustamos los
            // límites izquierdo y derecho para buscar en la mitad derecha del subarray.

            if (sortedNum[mid] <= maxVal) {

                // Después de cada iteración del bucle while,
                // count se actualiza con la posición del índice medio más uno.
                // Esto se debe a que si el valor en el medio es menor o igual a maxVal,
                // entonces hay al menos mid + 1 elementos en el subarray que son menores o iguales a maxVal.
                count = mid + 1
                left = mid + 1

            //  Si el valor en el medio es mayor que maxVal,
            //  ajustamos los límites para buscar en la mitad izquierda del subarray.
            } else {
                right = mid - 1
            }
        }

        result.push(count)
    }

    return result
}

const num = [1, 4, 2, 4]
const max = [3, 5]
console.log(counterMaxes(num, max)) // Output: [2, 4]
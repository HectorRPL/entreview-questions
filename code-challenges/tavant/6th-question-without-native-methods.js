const arr = [
    1,
    1,
    [1, 2],
    [2, 3],
    [
        3,
        4,
        5,
        [
            6,
            7,
            8
        ]
    ]
]


const main = (multidimensionalArr = []) => {
    return flat(multidimensionalArr)
}

const flat = (crazyArray = [], index = 0) => {
    let newArray = []
    if (index === crazyArray.length) return

    if (crazyArray[index] === typeof 'number') {
        newArray.push(crazyArray[index])
        flat(newArray, index + 1)
    }

    if (crazyArray[index] === typeof 'array') {
        flat(newArray[index])
    }

    return newArray
}

console.log(main(arr))


/*
crear una nuevoArray []
si encuentras numeors hazle push
si la posición es un array itera ese array y añade los numeros al nuevoArray
    si al iterar te encuentras con un array itera ese array y añade los numeros al nuevoArray
*/

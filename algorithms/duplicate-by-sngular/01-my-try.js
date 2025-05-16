const arr = [1, 2, 3, 4, 5]

const duplicate = (arr = []) => {

    return [...arr, ...arr]
}

console.log(duplicate(arr))
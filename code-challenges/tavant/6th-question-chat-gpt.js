const main = (multidimensionalArr = []) => {
    return flat(multidimensionalArr)
}

const flat = (crazyArray = [], index = 0, newArray = []) => {
    if (index === crazyArray.length) return newArray
    if (typeof crazyArray[index] === 'number') newArray.push(crazyArray[index])
    if (Array.isArray(crazyArray[index])) newArray = newArray.concat(flat(crazyArray[index]))
    return flat(crazyArray, index + 1, newArray)
}

const arr = [1, 1, [1, 2], [2, 3], [3, 4, 5, [6, 7, 8]]]
console.log(main(arr))
const arr = [1, 2, 3, 4, 5] // => [5, 1, 2, 3, 4]

const result = (arr = []) => {
    const length = arr.length
    const lastNumber = arr[length - 1]
    let newArr = []
    newArr.push(lastNumber)
    for (let i = 0; i < length - 1; i++) newArr.push(arr[i])
    return newArr
}

console.log(result(arr))


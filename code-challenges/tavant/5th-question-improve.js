const arr = [1, 2, 3, 4, 5] // => [5, 1, 2, 3, 4]

const result = (arr = []) => {
    const length = arr.length
    let newArr = [arr[length - 1]]
    for (let i = 0; i < length - 1; i++) newArr = [...newArr, arr[i]]
    return newArr
}

console.log(result(arr))


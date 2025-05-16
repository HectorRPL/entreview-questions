// 5th question
// Write a program without using in-build functions

// output should be [5, 1, 2, 3, 4]
const numbers = [1, 2, 3, 4, 5]

const result = (arr = []) => {
    const length = arr.length
    const newArr = []
    for (let i = 0; i < length - 1; i++) {
        if (i === 0) {
            newArr.push(arr[length - 1])
            newArr.push(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(result(numbers))


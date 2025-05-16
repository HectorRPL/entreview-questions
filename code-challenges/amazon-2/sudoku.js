const numbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numbersTwo = [1, 1, 3, 4, 5, 6, 7, 8, 9]

const isRepeated = (nums = []) => {
    let result
    const obj = {}
    nums.forEach((value, index) => {

        if (!obj[value]) obj[value] = 1
        else obj[value] = ++obj[value]
        if (obj[value] > 1) result = true
    })

    return result
}

console.log(isRepeated(numbersOne))
console.log(isRepeated(numbersTwo))
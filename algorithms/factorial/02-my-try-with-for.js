const getFactorial = (number = 0) => {
    if (number === 0) return
    // 4 = 4 x 3 x 2 x 1

    let result = number
    for (let i = 1; i < number; i++) result = result * (number - i)
    return result

}

console.log(getFactorial(4)) // 24

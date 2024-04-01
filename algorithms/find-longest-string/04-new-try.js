const arrOne = ['a', 'ab', 'abc', 'abcd', 'aaaaaaaa']

const normalizeWord = (word = '') => {
    return [...new Set(word.split(''))]
        .join('')
        .trim()
        .toString()
        .toLowerCase()
}
const findLongestWord = (arrWord = []) => {
    let result = [...arrWord[0]]
    arrWord.forEach((word, index, array) => {
        const [lastElement] = result.slice(-1) // con destructuring
        const normalizedWord = normalizeWord(word)
        const isGraterThanLastValue = normalizedWord.length >= lastElement.length
        if (isGraterThanLastValue) result = [...result, normalizedWord] // better
        // if (isGraterThanLastValue) result.push(normalizeWord(word))
    })

    console.log(result);


    return result.pop() // better
    // return result.slice(-1)[0] // ok
    // return result[result.length - 1] // ok
}


console.log(findLongestWord(arrOne))



const arrayTwo = ['a', ['zz', 'yyyyy'], 'dd', 'fffsssssf'] // get ""ffff""

const isLongerThan = (string, newString) => string.length < newString.length

const getLongestString = (arr = []) => {
    let longestString = ''

    const findLongestInArray = (array) => {

        array.forEach(text => {
            if (Array.isArray(text)) findLongestInArray(text)
            else if (isLongerThan(longestString, text)) longestString = text
        })
    }

    findLongestInArray(arr)

    return longestString
}

console.log(getLongestString(arrayTwo))
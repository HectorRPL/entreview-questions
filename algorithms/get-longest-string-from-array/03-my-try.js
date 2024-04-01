const arrayOne = ['a', 'bb', 'ccc'] // get "ccc"
const arrayTwo = ['a', ['zz', 'yyyyy'], 'dd', 'ffff'] // get ""ffff""

const isLongerThan = (string, newString) => string.length < newString.length // return true || false

let longestString = '' // is important get out this
const getLongestString = (arr = []) => {

    arr.forEach(text => {
        if (text instanceof Array) getLongestString(text)
        if (isLongerThan(longestString, text)) longestString = text
    })

    return longestString

}

console.log(getLongestString(arrayOne))
console.log(getLongestString(arrayTwo))


const originalString = 'abcdefg'
const reversedString = originalString
    .split('')
    .reverse()
    .join('')

console.log(reversedString) // 'gfedcba'
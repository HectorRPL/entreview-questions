function decode_message(encoded_str) {
    let trimmed_str = encoded_str.trim()

    let words = trimmed_str.split(' ')

    let decoded_words = words.map(word => {
        if (!!!word) return
        return word.split('').reverse().join('')
    }).filter((word) => word !== undefined)

    return decoded_words.join(' ')
}

// Ejemplo 1
let encoded_str1 = " olleH I  epoh uoy era  gniod   llew "
console.log(decode_message(encoded_str1)) // "Hello I hope you are doing well"

// Ejemplo 2
let encoded_str2 = " ssendooG "
console.log(decode_message(encoded_str2)) // "Goodness"
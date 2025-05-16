function decode_message(encoded_str) {
    // Trim leading and trailing spaces
    let trimmed_str = encoded_str.trim();

    // Split the string by spaces
    let words = trimmed_str.split(/\s+/);

    // Reverse each word and join them with a single space
    let decoded_words = words.map(word => word.split('').reverse().join(''));
    let decoded_message = decoded_words.join(' ');

    return decoded_message;
}

// Ejemplo 1
let encoded_str1 = " olleH I epoh uoy era gniod llew ";
console.log(decode_message(encoded_str1)); // "Hello I hope you are doing well"

// Ejemplo 2
let encoded_str2 = " ssendoogG ";
console.log(decode_message(encoded_str2)); // "Goodness"
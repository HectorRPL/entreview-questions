/*
the better solution is with hash tables
*/

let text = 'Hola, que tal, tal bienvenidos, a BettaTech. Si os está gustando este video, subscribiros!, y darle a la campanilla me gusta, para ver los nuevos videos. ¿tienen alguna pregunta?.';

function normalizeWord(word) {
    return word
        .toLowerCase() // convert to lowercase
        .replace(/[.!,?¿¡]/g, ''); // remove rare symbols
}

function repeatedWords(text) {
    let dictionary = {};
    let separatedWords = text.split(' ');

    for (let word of separatedWords) {
        // if property exist in object then add it...
        const normalizedWord = normalizeWord(word);
        if (normalizedWord in dictionary) {
            // sum +1 to property with that property
            ++dictionary[normalizedWord];
        } else {
            // create the property with start value in 1
            dictionary[normalizedWord] = 1;
        }
    }
    return dictionary;
}

console.log(repeatedWords(text));

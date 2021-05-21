/*
Count repeated words in string
the better solution is with hash tables
*/

let text = 'Hola, que tal, tal bienvenidos, a BettaTech. Si os está gustando este video, subscribiros!, y darle a la campanilla me gusta, para ver los nuevos videos. ¿tienen alguna pregunta?.';

function normalizeWord(word) {
    return word.toLowerCase().replace(/[.!,?¿¡]/g, '');
}

function wordRepetitions(text) {
    let dict = {};
    let separatedWords = text.split(' ');

    for (let word of separatedWords) {
        if (normalizeWord(word) in dict) {
            ++dict[normalizeWord(word)];
        } else {
            dict[normalizeWord(word)] = 1;
        }
    }
    console.log({dict});
}

wordRepetitions(text);

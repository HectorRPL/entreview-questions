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
    // if property exist in object then ...
    if (normalizeWord(word) in dictionary) {
      // sum +1 to property with that property
      ++dictionary[normalizeWord(word)];
    } else {
      // create the property with start value in 1
      dictionary[normalizeWord(word)] = 1;
    }
  }
  return dictionary;
}

console.log(repeatedWords(text));

// with 'includes' array method
const stringOne = ['das', 'y', 'yyyyy', 'fdsgadbi', 'sdfghjklwertyuiozxcvbnm,'];
const stringTwo = ['gafsdfbi', 'ojffsdala', 'medfs', 'qwertyuiopasdfghjklzxcvbnm'];

// from this "aabbcc" to this 'abc'
// with new Array you can void repeted values
const cleanString = (word = '') => {
  const characterArr = word.split('');
  let result = [];

  for (let i = 0; i < characterArr.length; i++) {

    if (!result.includes(characterArr[i])) {
      result.push(characterArr[i]);
    }
  }

  return result.join('');

} // console.log(cleanString('aabbcc'));

const numCharacters = (word = '') => {
  return word.length;
}

const main = (stringsArray) => {

  // ad each word in a dictionary and return this { a: 1, aa: 2, bbb: 3, abcd: 4 }
  const dictionary = {};
  for (let i = 0; i < stringsArray.length; i++) {
    const normalizedWord = cleanString(stringsArray[i]);
    !dictionary[normalizedWord] ? dictionary[normalizedWord] = numCharacters(normalizedWord) : ++dictionary[normalizedWord];
  }

  // get the max value from the obj
  let arr = Object.values(dictionary); // convert obj to array
  let min = Math.min(...arr); // if you want the min value, beautiful
  let max = Math.max(...arr);

  return max; // I would to like improve, I want this: {qwertyuiopasdfghjklzxcvbnm: 24}
}

console.log(main(stringOne));

const stringOne = ['das', 'y', 'yyyyy', 'fdsgadbi', 'sdfghjklwertyuiozxcvbnm,'];
const stringTwo = ['gafsdfbi', 'ojffsdala', 'medfs', 'qwertyuiopasdfghjklzxcvbnm'];

const removeRepeatedCharacters = (string = '') => {
    const convertedStringOntoArray = string.split('');
    const repeatedCharactersRemoved = {};
    for (let i = 0; i < convertedStringOntoArray.length; i++) {
        if (!repeatedCharactersRemoved[convertedStringOntoArray[i]]) {
            repeatedCharactersRemoved[convertedStringOntoArray[i]] = null;
        }
    }
    const propertyNames = Object.keys(repeatedCharactersRemoved);

    return propertyNames.join('');
}

const main = (stringArr = []) => {
    const result = [];
    for (let i = 0; i < stringArr.length; i++) {
        const wordCleaned = removeRepeatedCharacters(stringArr[i]);

        if (result.length === 0) result.push(wordCleaned);

        // si la palabra es mas grande que la palabra anterior entonces ponla en el final del array
        if (wordCleaned.length > result[result.length - 1].length) {
            result.push(wordCleaned);
        }
    }


    return result[result.length - 1].length;
}

console.log(main(stringOne));
console.log(main(stringTwo));


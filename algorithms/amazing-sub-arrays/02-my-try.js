const s = 'ABEC';

const VOWELS = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
};

const result = (word = '') => {

    const charactersArray = word.split('');
    const wordLength = word.length;
    let total = 0;


    for (let index = 0; index < wordLength; index++) {
        isAmazingString(charactersArray[index]) ? total += wordLength - index : null;
    }

    return total;

}

const isAmazingString = (vowel = '') => {
    return !!VOWELS[vowel.toLowerCase()];
}


console.log(result(s));

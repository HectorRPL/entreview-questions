const s1 = 'ABEC';
const s2 = 'ABECZ';

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
        const nextStringLength = wordLength - index;
        isAmazingString(charactersArray[index])
            ? (total += nextStringLength)
            : null;
    }

    return total;

}

const isAmazingString = (vowel = '') => {
    return !!VOWELS[vowel.toLowerCase()];
}


result(s1);

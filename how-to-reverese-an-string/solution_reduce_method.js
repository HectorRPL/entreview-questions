const revertWord = function (word) {
    const stringSplit = word.split(''); // word => [w, o, r, d]
    return stringSplit.reduce((accumulator, currentValue) => {
        return currentValue + accumulator;
    }, '');
}
console.log(revertWord('hello'));

const s1 = 'aba';
const s2 = 'zz';
const s3 = 'codility';
const s4 = 'pepe';

const result = (chars = [ String ], index = Number, index2 = Number) => {

    if (chars.length == index2) {
        return result(chars, index + 1, index + 2);
    } else if (chars[index] == chars[index2]) {
        return chars[index];
    } else {
        return result(chars, index, index2 + 1);
    }

}

console.log(result(s1.split(''), 0, 1));
console.log(result(s2.split(''), 0, 1));
console.log(result(s3.split(''), 0, 1));
console.log(result(s4.split(''), 0, 1));

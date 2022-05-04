const s1 = 'aba';
const s2 = 'zz';
const s3 = 'codility';

const result = (word = '') => {
    const obj = {};

    word
        .split('') // convert word into array
        .forEach((word, index) => { // iterate the array
            if (!obj[word]) {
                obj[word] = 1;
            } else {
                obj[word] = obj[word] += 1;
            }
        });

    const arr = [];
    Object
        .keys(obj)
        .forEach((key, index) => {
            if (arr.length === 0) arr.push([key, obj[key]]);
            // console.log('arr[index] => ',arr[index]);
            if (obj[key] > arr[arr.length - 1][1]) {
                arr.push([key, obj[key]])
            }
            // console.log(key, obj[key]);
        });
    // console.log('arr => ', arr);


    return arr[arr.length - 1];

}

console.log(result(s1));
console.log(result(s2));
console.log(result(s3));

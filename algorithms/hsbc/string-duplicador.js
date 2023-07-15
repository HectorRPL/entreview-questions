const s1 = 'xyz';
const s2 = 'hsbc';

const main = (s = '') => {
    const arrString = [...s]

    let result = []
    arrString.forEach(character => result = [...result, ...character, ...character])

    return result.toString()

}

console.log(main(s1));
console.log(main(s2));

d
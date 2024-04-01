const splitAndSortString = (str) => {
    return str
        .split('')
        .sort((letterA, letterB) => {
            return (letterA < letterB)
                ? -1
                : (letterA > letterB)
                    ? 1
                    : 0
        }) // no es necesaria esta funcion solo para numeros u ordenamiento específico
        .join('') // se le pone string vacio sino agrega una comma ','
}

const main = (stringOne, stringTwo) => {

    const str1 = splitAndSortString(stringOne)
    const str2 = splitAndSortString(stringTwo)

    console.log('str1 => ', str1);
    console.log('str2 => ', str2);

    return str1 === str2
}

console.log(main('fried', 'friend'));
console.log(main('gainly', 'laying'));
console.log(main('sadder', 'laying'));
console.log(main('listen', 'silent'));



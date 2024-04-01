const json1 = {
    "hello": "world",
    "hi": "hello",
    "you": "me",
    "they": "they",
}

const json2 = {
    "hello": "world",
    "hi": "helloo",
    "you": "me"
}


const main = (json1 = {}, json2 = {}) => {
    return Object
        .keys(json1)
        .filter(value => json2[value]) // is key present in both arrays
        .filter(value => json1[value] !== json2[value]) // is value equal
}

console.log(main(json1, json2));
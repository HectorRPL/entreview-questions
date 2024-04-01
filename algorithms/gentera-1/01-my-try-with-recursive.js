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
    return filterKeys(json1, json2)
}

function filterKeys(
    json1,
    json2,
    keys = Object.keys(json1),
    index = 0,
    result = []
) {

    if (index >= keys.length) return result

    const key = keys[index]

    if (json2[key] !== undefined && json1[key] !== json2[key]) result.push(key)

    return filterKeys(json1, json2, keys, (index + 1), result)

}

console.log(main(json1, json2))
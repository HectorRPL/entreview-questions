const obj1 = {
    name: 'john',
    lastName: 'blliss',
    city: 'florida',
}

const obj2 = {
    name: 'john',
    lastName: 'blliss',
    city: 'florida',
}

function manipulateStudentRecord(obj, operation, prop, newValue) {
    /*
        let {
            [prop]: oldValue,
            ...rest
        } = obj*/

    if (operation === 'edit' && obj[prop] !== undefined) {
        obj[prop] = newValue
    } else if (operation === 'delete') {
        delete obj[prop]
    }

    return obj

}

console.log(manipulateStudentRecord(obj1, 'delete', 'name', 'hector'));
console.log(manipulateStudentRecord(obj2, 'edit', 'city', 'mexico'));
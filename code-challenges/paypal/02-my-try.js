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

const operations = {
    edit: (obj, prop, newValue) => {
        return {
            ...obj,
            [prop]: newValue
        }
    },
    delete: (obj, keyToDelete) => {
        return Object
            .keys(obj)
            .filter(key => key !== keyToDelete)
            .map(key => [key, obj[key]])
            .reduce((previousValue, currentValue) => {
                return {
                    ...previousValue,
                    [currentValue[0]]: currentValue[1]
                }
            }, {});
    }
}

function manipulateStudentRecord(obj, operation, prop, newValue) {
    return operations[operation](obj, prop, newValue)
}

console.log(manipulateStudentRecord(obj1, 'delete', 'name', 'hector'));
console.log(manipulateStudentRecord(obj2, 'edit', 'city', 'mexico'));
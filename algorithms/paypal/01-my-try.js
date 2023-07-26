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
        const newObj = {...obj}
        newObj[prop] = newValue;
        return newObj
    },
    delete: (obj, key) => {
        const newObj = {...obj}
        delete newObj[key]
        return newObj;
    }
}










function manipulateStudentRecord(obj, operation, prop, newValue) {
    return operations[operation](obj, prop, newValue)
}

console.log(manipulateStudentRecord(obj1, 'delete', 'name', 'hector'));
console.log(manipulateStudentRecord(obj2, 'edit', 'city', 'mexico'));
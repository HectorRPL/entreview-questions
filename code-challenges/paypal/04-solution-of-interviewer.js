const obj1 = {
    name: '1',
    lastName: '1',
    city: '1',
}

const obj2 = {
    name: '2',
    lastName: '2',
    city: '2',
}

function manipulateStudentRecord(obj, operation, prop, newValue) {

    let {
        [prop]:oldValue,
        ...rest
    } = obj
    if (operation === 'delete') {


    }




    obj[prop] = newValue ? newValue : oldValue

    return {
        ...rest
    }

}

console.log(manipulateStudentRecord(obj1, 'delete', 'name', 'hector'));
console.log(manipulateStudentRecord(obj2, 'edit', 'city', 'mexico'));
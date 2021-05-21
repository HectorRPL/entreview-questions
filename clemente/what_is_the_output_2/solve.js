const array1 = [{name: 'foo'}, {name: 'bar'}, {name: 'baz'}];

const array2 = new Array(array1.length).fill({}); // when you do fill a 'new Array' the value the same exact the value every single position in array

array2.forEach((obj, index) => {
    obj.name = array1[index].name;
    obj.position = index;
});

const array3 = array1.map((obj, index) => ({
    ...obj,
    position: index
}));

const array4 = array1.slice();

array4.forEach((obj, index) => {
    obj.position = index;
});

console.log(array1); // [{name: 'foo', position: 0}, {name: 'bar', position: 1}, {name: 'baz', position: 2}]
console.log(array2); // [{name: 'baz', position: 2}, {name: 'baz', position: 2}, {name: 'baz', position: 2}]
console.log(array3); // [{name: 'foo', position: 0}, {name: 'bar', position: 1}, {name: 'baz', position: 2}]
console.log(array4); // [{name: 'foo', position: 0}, {name: 'bar', position: 1}, {name: 'baz', position: 2}]

/*
conclusions
the forEach method in array4 has mutated array1
*/

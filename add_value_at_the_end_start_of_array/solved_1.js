var myArray = ['a', 'b', 'c', 'd'];

myArray.push('end')
myArray.unshift('start'); /*?*/

// ES5
console.log(myArray); // ['start', 'a', 'b', 'c', 'd', 'end]

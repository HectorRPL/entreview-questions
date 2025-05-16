const booleanArray = [true, true, true]
// [false, true, false] // false
// [false, false, false] // false
// [true, true, true] // true



function execute(arrayOfBooleans = []) {
let trueValue = 0
let falseVakue = 0
arrayOfBooleans.forEach((value) => value === true ? trueValue++ : falseVakue ++)
return falseVakue > 0 ? false : true
}




console.log(execute(booleanArray)) // false

const test = function expect(fn, expectedResult) {
return fn === expectedResult
}

console.log('RESULT => ', test(execute([true, true]), true))
console.log('RESULT => ', test(execute([true, true]), false))


// expect(execute([true, true]), true)
// expect( execute([true, true]), true )
// expect( execute([true, false]), false )
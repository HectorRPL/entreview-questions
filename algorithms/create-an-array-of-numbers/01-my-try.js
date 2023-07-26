const main = (number = 0) => {

  if (number === 0) return console.log('Zero is not allowed')

  // form 1
  const applyMethodTest1 = Array.apply(null, {length: number}) // => [undefined, undefined, undefined]
  console.log(applyMethodTest1);

  // form 3
  const applyMethodTest2 = new Set() // => { }
  applyMethodTest2.add(3).add(4) // => { 3, 4 }
  console.log(applyMethodTest2);
  const arrayNumbers = Array.from(applyMethodTest2) // => [ 3, 4 ] // you can set this: [...applyMethodTest2]
  console.log(arrayNumbers);

  // form 2
  const test = [1, 2, 3].map(Number.call, Number) // => [ 0, 1, 2 ]
  console.log(test);

}

main(3);



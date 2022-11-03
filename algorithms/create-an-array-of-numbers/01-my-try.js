const main = (number = 0) => {

  if (number === 0) {
    console.log('Zero is not allowed')
    return
  }

  // form 1
  const applyMethodTest1 = Array.apply(null, {length: number}) // => [undefined, undefined, undefined]

  // form 3
  const applyMethodTest2 = new Set() // => { }
  applyMethodTest2.add(3).add(4) // => { 3, 4 }
  const arrayNumbers = Array.from(applyMethodTest2) // => [ 3, 4 ] // you can set this: [...applyMethodTest2]

  // form 2
  const test = [1, 2, 3].map(Number.call, Number) // => [ 0, 1, 2 ]

}

main(3);



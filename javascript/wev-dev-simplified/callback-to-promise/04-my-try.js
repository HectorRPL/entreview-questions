

const task01 = () => new Promise(resolve => resolve('W'))
const task02 = () => new Promise(resolve => resolve('O'))
const task03 = () => new Promise(resolve => resolve('R'))
const task04 = () => new Promise(resolve => resolve('L'))
const task05 = () => new Promise(resolve => resolve('D'))


const sayHello = () => {
  return new Promise.all([
    task01,
    task02,
    task03,
    task04,
    task05,
  ])
}

sayHello()

/*

//// LEARNING 01:

This is bad:

const p1 = () => new Promise(r => r('H')) // this declaration is incorrect

This is correct
const p1 = new Promise(r => r('H'))

//// LEARNING 02:

This is bad:

new Promise.all([ // the key wor 'new' is invalid, you need to assign in a variable!
    task01,
    task02,
    task03,
    task04,
    task05,
  ])

This is correct:

Promise.all([
  task01,
  task02,
  task03,
  task04,
  task05,
])



* */



const task01 = () => new Promise(resolve => resolve('H'))
const task02 = () => new Promise(resolve => resolve('E'))
const task03 = () => new Promise(resolve => resolve('L'))
const task04 = () => new Promise(resolve => resolve('L'))
const task05 = () => new Promise(resolve => resolve('O'))


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

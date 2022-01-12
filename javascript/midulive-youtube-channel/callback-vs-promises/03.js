// wrap setTimeout in a promise

const showSum = (num1, num2) => {
  const sum =  num1 + num2
  return new Promise(((resolve, reject) => {
    resolve(sum)
  }))
}


showSum(1 , 3)
  .then(value => console.log(value))

// with async / await
// const result = await showSum(1, 1);

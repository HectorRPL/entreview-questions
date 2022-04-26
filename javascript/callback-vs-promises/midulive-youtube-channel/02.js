// async


const operation = (num1, num2, callback) => {
  const sum = num1 + num2
  return setTimeout(() => {
    callback(sum)
  }, 500)
}

const showSum = (result) => console.log(result)

operation(1, 3, showSum)


// callback es:
// "cuando hagas algo, avísame cuando termines para yo hacer otra cosa"

const operation = (num1, num2, callback) => {
  return setTimeout(() => {
    callback(num1, num2)
  }, 500)
}

const sumFn = (a, b) => console.log(a + b)

operation(1, 3, sumFn)


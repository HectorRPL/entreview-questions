// type 2
const myFirstPromise = () => {
  return new Promise((resolve, reject) => {
    1 === 1 ? resolve('Good') : reject('Error')
  })
};

myFirstPromise()
  .then(message => console.log(message))
  .catch(error => console.log(error))




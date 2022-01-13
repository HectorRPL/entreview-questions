// type 1
const p = new Promise((resolve, reject) => {
  1 === 1 ? resolve('Good') : reject('Error')
});

p.
then(message => console.log(message))
  .catch(error => console.log(error))



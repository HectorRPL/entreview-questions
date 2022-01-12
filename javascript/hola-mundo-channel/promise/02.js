const p1 = Promise.resolve(1)
console.log(p1); // Promise { 1 }

const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 500));


delayed(7)
  .then(x => {
    console.log(x)
    return delayed(x + 7)
  })
  .then(x => console.log(x))
  .then(x => Promise.reject('SHIT!'))
  .catch(e => console.log(e))



// https://www.youtube.com/watch?v=5XyzLfPBpZs

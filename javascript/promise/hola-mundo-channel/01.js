const p1 = Promise.resolve(1)
console.log(p1); // Promise { 1 }

p1
  .then(x => x + 5)
  .then(x => Promise.resolve(x + 5))
  .then(x => Promise.reject('ERROR WE!'))
  .then(x => console.log('no llega'))
  .catch(x => console.log(x))






// https://www.youtube.com/watch?v=5XyzLfPBpZs

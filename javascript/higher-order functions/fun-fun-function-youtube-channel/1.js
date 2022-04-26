const animals = [
  {name: 'dog 1', species: '🐶'},
  {name: 'dog 2', species: '🐶'},
  {name: 'cat 1', species: '🐱'},
  {name: 'cat 2', species: '🐱'},
  {name: 'cat 3', species: '🐱'},
  {name: 'rat 1', species: '🐭'},
  {name: 'dog 3', species: '🐶'},
  {name: 'rab 1', species: '🐰'},
  {name: 'dog 4', species: '🐶'},
  {name: 'rab 1', species: '🐰'},
  {name: 'rab 1', species: '🐰'},
]

// this is not a higher order function
/*
let dogs = []
const length = animals.length
for (let i = 0; i < length; i++) {
  if (animals[i].species === '🐶') dogs.push(animals[i])
}
console.log('dogs => ', dogs);
*/

//

const isDog = animal => animal.species === '🐶 🐕 😼'
const isNotADog = animal => animal.species !== '🐶'

const dogs = animals.filter(animal => isDog(animal))
const noDogs = animals.filter(animal => isNotADog(animal))

console.log('dogs => ', dogs);
console.log('noDogs => ', noDogs);


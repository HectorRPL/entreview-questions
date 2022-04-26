/*
*
How would you make the name immutable?
*
*/

const p = {
  name: 'Hector',
  hello: () => console.log(`Hello ${p.name}`)
}

p.hello();

// With Object.freeze() javascript method
Object.freeze(p);

p.name = 'Pepe';
p.hello();

const p = {
  name: 'Hector',
  hello: () => console.log( `Hello ${p.name}`)
}

p.hello();

p.name = 'Pepe';
p.hello();

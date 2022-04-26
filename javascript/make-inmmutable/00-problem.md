Make immutable the name property

const p = {
name: 'Hector',
hello: () => console.log( `Hello ${p.name}`)
}

p.hello();

p.name = 'Pepe';
p.hello(); // => 'Pepe' (wrong) => we need to print 'Hector'

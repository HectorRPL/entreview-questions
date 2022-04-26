const crudMaker = domain => resource => {
 const url = `${domain}/${resource}`;

 return ({
  create: (x) => fetch(url, {
   method: 'POST',
   body: JSON.stringify(x)
  })
   .then(x => x.json()),
  get: () => () => fetch(url)
   .then(x => x.json())
 })
}

fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json())
const base = crudMaker('https://jsonplaceholder.typicode.com/');
const todos = base('todos');
const users = base('users');

// users.get().then(x => console.log(x));

/*
Este ejemplo lo saqué del canal de youtube hola mundo

La doble arrow function es para poder implementar closures,
una función que devuelve otra función.
Cuando declara

 Base = crudder('url ....')

Queda esperando el recurso, y lo setea cuando instancia
a Base('todos')

const crudder = dominio => recurso => { }
'dominio', es una función que retorna 'recurso', y ésta
a su vez retorna una función anónima. Correcto?

*/

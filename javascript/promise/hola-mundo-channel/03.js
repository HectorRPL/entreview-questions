// execute this code in navigator console, fetch is no implemented in node

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then(value => value.json())
  .then(value => console.log(value))

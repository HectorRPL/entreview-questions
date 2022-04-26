// https://www.youtube.com/watch?v=rKK1q7nFt7M
// by Carlos Azuastre
// Fix, and print the data simulating as async

const data = [
  {id: 1, title: 'iron man 1', year: 2000},
  {id: 2, title: 'iron man 2', year: 2001},
  {id: 3, title: 'iron man 3', year: 2002},
];

const getData = () => {
  setTimeout(() => {
    return data
  }, 1500);
}

console.log(getData());


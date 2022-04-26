const original = {
  name: 'Chester I',
};

const realClone = {
  ...original,
};

const fakeCopy = original;


original.name = 'Chester II';


console.log({fakeCopy}); // {name: 'Chester II'} MUTATE
console.log({realClone}); // {name: 'Chester I'}

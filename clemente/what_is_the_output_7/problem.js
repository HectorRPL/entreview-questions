const DEFAULT_PERSON_OBJECT = {
    name: 'Unknown',
    location: 'Unknown',
    interests: [],
};

const createPerson = (name, location, interests) => {
    const person = {...DEFAULT_PERSON_OBJECT};
    if (!!name) person.name = name;
    if (!!location) person.location = location;
    if (!!interests) person.interests = interests;
    return person;
};

const setName = (person, name) => {
    person.name = name;
};

const setLocation = (person, location) => {
    person.location = location;
};

const addInterests = (person, interests) => {
    person.interests = interests;
};

const elon = createPerson('Elon', 'Mars', ['Tesla']);
const jeff = createPerson('Jeff', undefined, undefined);
const bill = createPerson('Bill', undefined, ['Microsoft']);
const mark = createPerson(undefined, undefined, undefined);

addInterests(elon, 'Space');
addInterests(elon, 'Renewable energy');

setLocation(jeff, 'Moon');
addInterests(jeff, 'Amazon');
addInterests(jeff, 'Space');
addInterests(jeff, 'Renewable energy');

setLocation(jeff, 'Earth');
addInterests(jeff, 'Renewable energy');
addInterests(jeff, 'Medicine');

console.log(elon); // ?
console.log(jeff); // ?
console.log(bill); // ?
console.log(mark); // ?

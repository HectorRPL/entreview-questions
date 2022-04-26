const freshPlants = [
    'areca palm',
    'bambu',
    'cactus',
    'lengua de tigre',
    'tronco de brasil',
    'hiedra inglesa',
];

const titleCase = (str) => {
    let arrWords = str.toLowerCase().split(' '); // convert in array
    return arrWords.map(word => (word.charAt(0).toUpperCase() + word.substring(1)).join(' '));
};


const plantsWithCapitalLetter = freshPlants.map(plant => titleCase(plant));

const reversedNames = freshPlants.map((_, idx, array) => array[array.length - 1 - idx]);



/*
const length = arrWords.length;
    for (let i = 0; i < length; i++) {
        // Assign it back to the array
        arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].substring(1);
    }
    // Directly return the joined string
    return arrWords.join(' '); // [ 'Areca', 'Palm' ] => 'Areca Palm'
*/

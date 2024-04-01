const cookies = 'key1=chocolate; key2=iceCream; key3=cookies;';
const stepOne = cookies.split('key2='); // [ '', 'chocolate; key2=iceCream; key3=cookies;' ]
const stepTwo = stepOne[1].split(';')[0]; // iceCream
console.log(stepTwo);



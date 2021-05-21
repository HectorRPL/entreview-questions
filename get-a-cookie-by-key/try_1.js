const cookies = 'key1=chocolate; key2=iceCream; key3=cookies;';

// convert string into array with split
const arrCookies = cookies.split('; '); // [ 'key1=chocolate', 'key2=iceCream', 'key3=cookies' ]

// split key value by equal sign
const arrArrCookiesKeyValue = arrCookies.map(cookie => [cookie.split('=')]);  // [[['key1', 'chocolate']], ...']

// make an object with key value
const objectKeyValueCookies = {}; // { key1: 'chocolate', key2: 'iceCream', key3: 'cookies;' }
for (let arr of arrArrCookiesKeyValue) {
    objectKeyValueCookies[arr[0][0]] = arr[0][1];
}

// find the key in object
const findValueByKey = (key = null, objectCookies) => objectCookies[key];
console.log(findValueByKey('key2', objectKeyValueCookies)); // chocolate

/*
function error(str) {
 console.log('%c Error: el usuario no está registrado  ', 'background: red; color: white;');
}

function warning(str) {
 console.log('%c Error: el usuario no está registrado  ', 'background: red; color: white;');
}

function success(str) {
 console.log('%c Error: el usuario no está registrado  ', 'background: red; color: white;');
 console.log(`%c Error: ${str}', 'background: red; color: white;`);
}
*/


const defaultStyles = 'color: white';
function printerMessages(type, style) {
 return function (str) {
  console.log(`%c ${type}: ${str}`, defaultStyles + style);
 }
}

const error = printerMessages('Error', 'background: red;');
const warning = printerMessages('Warning', 'background: yellow;');
const success = printerMessages('Success', 'background: blue;');
error('Error');
warning('Warning');
success('Success');

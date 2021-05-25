/* Print "privateVariable" var from outside */

function secretVariable() {
    var privateVariable = 'super secret code';
}

console.log(privateVariable); // ReferenceError: privateVariable is not defined

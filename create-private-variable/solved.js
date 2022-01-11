function secretVariable() {
    var privateVariable = 'super secret code';
    return function () {
        return privateVariable
    };
}

var getPrintableVariable = secretVariable();
console.log(getPrintableVariable()); // super secret code
console.log(secretVariable()); // f(){return privateVariable}






function secretVariable() {
    var privateVariable = 'super secret code';
}

// my try

function secretVariable() {
    {
        privateVariable: 'super secret code'
    }
}


// solution


function secretVariable() {
    var privateVariable = 'super secret code';
    return function () {
        return privateVariable
    };
}

var getPrintableVariable = secretVariable();
console.log(getPrintableVariable()); // super secret code
console.log(secretVariable()); // f(){return privateVariable}






const person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`); // Lexical binding
        }, 1000);
    }
};

person.greet(); // Output: Hello, John
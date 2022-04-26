// what is the output?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stolenSecretIdentity = hero.getSecretIdentity();

// my answer

console.log(stolenSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); // undefined

// solved

var stolenSecretIdentityBind = hero.bind.getSecretIdentity(hero) // bind and pass the hero object
console.log(stolenSecretIdentityBind()); // 'John Doe'
console.log(hero.getSecretIdentity()); // 'John Doe'

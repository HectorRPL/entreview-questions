// what is the output?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stolenSecretIdentity = hero.getSecretIdentity();

console.log(stolenSecretIdentity());
console.log(hero.getSecretIdentity());

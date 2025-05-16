function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

const cat = new Animal('Cat', 'Meow');
console.log(cat.sound); // Output: Meow
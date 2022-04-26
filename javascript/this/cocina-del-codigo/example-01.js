function greetings(name) {
  console.log(`Hello ${name}`);
}


const yo = {
  name: 'Hector',
  greetings: function () {
    console.log(`Hello ${this.name}`)
  }
}

greetings(yo.name);
yo.greetings();
console.log(yo.name);;

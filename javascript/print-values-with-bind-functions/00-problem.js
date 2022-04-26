function printName() {
  console.log(this.name);
}


function printLastName() {
  console.log(this.lastName);
}


const name = printName.bind('hector');

const lastName = printLastName().bind('flores');


// I don't remember very good the step-counter-between-two-integers

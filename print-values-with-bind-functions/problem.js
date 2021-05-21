function printName() {
    console.log(this.name);
}


function printLastName() {
    console.log(this.lastName);
}


const name = printName.bind('hector');

const lastName = printLastName().bind('flores');


// I dont remember very good the problem

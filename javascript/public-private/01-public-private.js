class CoffeeMachine {
    waterAmount = 0; // the amount of water inside

    constructor(power) {
        this.power = power;
        alert( `Created machine, power: ${power}` );
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;

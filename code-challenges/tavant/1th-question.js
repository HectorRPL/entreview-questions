// 1th question

const person1 = {
    name: 'Rajat',
    getName: () => {
        console.log(this.name)
    }
}

person1.getName()

// variation question

const person2 = {
    name: 'Rajat',
    getName: function () {
        console.log(this.name)
    }
}

person2.getName()
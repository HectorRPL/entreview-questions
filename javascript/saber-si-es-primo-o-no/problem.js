const num1 = 1
const num2 = 2
const num3 = 3
const num4 = 4
const num5 = 5
const num6 = 6
const num7 = 7

// solo aquel que se puede dividir entre el mismo y el 1 (solo si y solo si)
// el cuatro no es primo porque se puede dividir entre si mismo, entre 1, y con 2


const isPrime = (n) => {

    if (n <= 1) return false

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }

    return true
}


console.log(num1 + ' is prime = ' + isPrime(num1));
console.log(num2 + ' is prime = ' + isPrime(num2));
console.log(num3 + ' is prime = ' + isPrime(num3));
console.log(num4 + ' is prime = ' + isPrime(num4));
console.log(num5 + ' is prime = ' + isPrime(num5));
console.log(num6 + ' is prime = ' + isPrime(num6));
console.log(num7 + ' is prime = ' + isPrime(num7));
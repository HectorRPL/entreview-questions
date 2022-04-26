const fizzbuzz = (num) => {

    if (!(num % 3)) {
        console.log('fizz', num);
    } else if (!(num % 5)) {
        console.log('buzz', num);
    } else if (!(num % 3) && !(num % 5)) {
        console.log('fizz buzz', num);
    } else {
        console.log(num);
    }

}

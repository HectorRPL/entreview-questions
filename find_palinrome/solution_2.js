(function (str) {
    let reversed = '';
    for (let x of str) {
        reversed = x + reversed;
    }
    console.log('solution 2: ', str === reversed);

})('hector');

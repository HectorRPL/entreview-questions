(function (str) {
    let reversed = '';
    for (let x of str) {
        reversed = x + reversed;
        console.log(reversed);
    }
    console.log('Is palindrome?: ', str === reversed);

})('hector');

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add1 = makeAdder(1);
var add2 = makeAdder(2);

console.log(add1(1));  // 2
console.log(add2(2)); // 4

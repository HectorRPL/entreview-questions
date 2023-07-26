var callpoints = function (ops = []) {
    let result = [];
    for (let i = 0; i < ops.length; i++) {
        if (typeof ops[i] === 'number') result.push(ops[i])
        if (ops[i] === '+') result.push(result[result.length - 1] + result[result.length - 2])
        if (ops[i] === 'D') result.push((result[result.length - 1]) * 2)
        if (ops[i] === 'C') result.pop()
    }

    return result.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

const case1 = [5, -2, 4, 'C', 'D', 9, '+', '+'];
console.log('case1 = ' + callpoints(case1));

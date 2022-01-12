let func = function () {

    (function () {
        let l = 'let';
        var v = 'var';
        console.log(l); // ReferenceError: l is not defined
        console.log(v);
    })();

}

func();

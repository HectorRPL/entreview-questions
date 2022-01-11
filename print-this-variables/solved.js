let func = function () {

    {
        (function () {
            let l = 'let';
            var v = 'var';
            console.log(v);
            console.log(l);
        })();
    }

}

func();

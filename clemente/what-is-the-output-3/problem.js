const fooObj = {name: 'foo'};
const barObj = {name: 'bar'};

const getFoo = () => Promise.resolve(fooObj);
const getBar = () => {
    new Promise(resolve => {
        setTimeout( () => {
            resolve(barObj);
        }, 3000);
    })
};

Promise.all([getFoo(), getBar()])
    .then((foo, bar) => {
        console.log(fooObj, barObj);
        console.log(foo, bar);

        foo.isAnAlgoExpert = foo.name.includes('algoExpert');
        bar.isAnAlgoExpert = bar.name.includes('algoExpert');

        return [foo, bar];
    })
    .then(([foo, bar]) => {
        console.log(fooObj, barObj);
        console.log(foo, bar);
    })
    .catch(reason => {
        console.log(reason)
    });



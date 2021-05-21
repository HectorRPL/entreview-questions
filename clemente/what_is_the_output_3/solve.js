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
        console.log(fooObj, barObj); // {name: 'foo'} , {name: 'bar'}
        console.log(foo, bar); // {name: 'foo'} , {name: 'bar'}

        foo.isAnAlgoExpert = foo.name.includes('algoExpert'); // false
        bar.isAnAlgoExpert = bar.name.includes('algoExpert'); // false

        return [foo, bar];
    })
    .then(([foo, bar]) => {
        console.log(fooObj, barObj); // {name: 'foo', isAnAlgoExpert: false} , {name: 'bar', isAnAlgoExpert: false}
        console.log(foo, bar); // {name: 'foo', isAnAlgoExpert: false} , {name: 'bar', isAnAlgoExpert: false}
    })
    .catch(reason => {
        console.log(reason)
    });



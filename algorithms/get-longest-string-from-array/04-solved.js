const arrayTwo = ['a', ['zz', 'yyyyy'], 'dd', 'ffff']; // get ""ffff""

const getLongestString = (arr = []) => {
    const flatted = arr.flatMap(value => value);
    console.log(flatted);

};


console.log(getLongestString(arrayTwo));



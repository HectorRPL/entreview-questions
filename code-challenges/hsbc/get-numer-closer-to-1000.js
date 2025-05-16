const NUN_OBJECTIVE = 1000;

const getDistance = (num = 0) => {
    return num > 1000
        ? num - NUN_OBJECTIVE
        : NUN_OBJECTIVE - num;
};

const main = (num1 = 0, num2 = 0) => {

    const distanceNum1 = getDistance(num1);
    const distanceNum2 = getDistance(num2);

    if (distanceNum1 === distanceNum2) return 'equals';
    return (distanceNum1 < distanceNum2) ? num1 : num2;

};


console.log(main(1032, 754));
console.log(main(998, 1003));
console.log(main(1, 2));
console.log(main(900, 1100));



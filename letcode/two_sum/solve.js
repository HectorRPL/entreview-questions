// ( [ 2, 7, 11, 15 ], 9 ) => [0, 1]

function twoSum(numbersArray, target) {
    const complement = new Map(); // {} ... { '16': 0 } ... { '11': 1, '16': 0 }
    const length = numbersArray.length; // Always put the length outside of for(i). Increases the complexity

    for (let i = 0; i < length; i++) {
        // console.log('numbersArray[i] => ', numbersArray[i]);
        // console.log('complement => ', complement);

        if (complement[numbersArray[i]] >= 0) {
            console.log('complement[numbersArray[i]] =>', complement[numbersArray[i]]);
            const something = complement[numbersArray[i]]; // {0:}
            return [something, i];
        }
        const targetMinusIPosition = target - numbersArray[i]; // 24, 19, 18
        // console.log('targetMinusIPosition => ', targetMinusIPosition);
        complement[targetMinusIPosition] = i;
        // console.log('complement => ', complement); // { '24': 0 } ... { '19': 1, '24': 0 } ... { '15': 2, '19': 1, '24': 0 }
    }

    return [];
}

twoSum([2, 7, 11, 15], 26);






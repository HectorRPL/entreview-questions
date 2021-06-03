// ( [ 2, 7, 11, 15 ], 9 ) => [0, 1]

function twoSum(numbersArray, target) {
    const complement = new Map(); // {} ... { '16': 0 } ... { '11': 1, '16': 0 }
    const length = numbersArray.length; // Always put the length outside of for(i). Increases the complexity

    for (let i = 0; i < length; i++) {
        // console.log('complement ', complement);
        // console.log('nums[i] ', numbersArray[i]);
        // console.log('complement[numbersArray[i]] ', complement[numbersArray[i]]);
        // console.log(complement[numbersArray[i]] >= 0);
        if (complement[numbersArray[i]] >= 0) {
            const something = complement[numbersArray[i]]; // {0:}
            return [something, i];
        }
        const what = [target - numbersArray[i]]; // => ???
        complement[what] = i;
        console.log(what);
        // console.log('=> ', complement);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 26));





// ( [ 2, 7, 11, 15 ], 9 ) => [0, 1]

function twoSum(nums, target) {
    const complement = new Map(); /*?*/
    const length = nums.length; /*?*/

    for (let i = 0; i < length; i++) {
        if (complement[nums[i]] >= 0 ) {
            const something = complement[nums[i]]; /*?*/
            return [something, i]; /*?*/
        }
        const what = [target - nums[i]]; /*?*/
        complement[what] = i; /*?*/
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 18));





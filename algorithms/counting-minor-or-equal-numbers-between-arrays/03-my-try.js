const main = (nums = [], maxes = []) => {

    // validate arrays isn't empty
    const lengthNum = nums.length;
    const lengthMaxes = maxes.length;
    if (lengthNum === 0 || lengthMaxes === 0) return;

    const result = [];

    for (let i = 0; i < maxes.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            nums[j] <= maxes[i] ? counter++ : null;
            // console.log(`${nums[j]} <= ${maxes[i]}`, nums[j] >= maxes[i]);
        }
        result.push(counter);
    }

    return result;
}


console.log(main([1, 2, 3], [2, 4]));
console.log(main([1, 4, 2, 4], [3, 5]));
console.log(main([4, 1, 4, 2, 4, 2, 3, 5], [2, 4]));
console.log(main([2, 10, 5, 4, 8], [3, 1, 7, 8]));
console.log(main([5, 2, 10, 5, 4, 8, 4, 3, 1, 7, 8], [1, 0, 3, 4]));


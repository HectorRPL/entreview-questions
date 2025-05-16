const nums = [8, 7, 2, 5, 3, 1]
const target = 10

const main = (nums = [], target = 0) => {
    let result
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i]
        const complementNumber = target - number

        for (let j = 0; j < nums.length; j++) {
            if (complementNumber === nums[j]) {
                result = [number, complementNumber]
                break
            }

        }
        if (!!!result) break
    }

    return result

}

console.log(main(nums, target))
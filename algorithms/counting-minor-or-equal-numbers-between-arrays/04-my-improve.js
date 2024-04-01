const num = [1, 4, 2, 4]
const max = [3, 5]

const counterMaxes = (num = [], maxes = []) => {

    let result = []

    for (let i = 0; i < maxes.length; i++) {
        const subArr = []
        for (let j = 0; j < num.length; j++) {
            if (maxes[i] >= num[j]) {
                subArr.push(num[j])
            }
        }

        result = [...result, [...subArr]]
    }

    return result
        .map((position = []) => position
            .reduce((previousValue, currentValue, currentIndex) => ++currentIndex, 1)
        )

}

console.log(counterMaxes(num, max))
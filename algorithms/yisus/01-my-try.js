const numbers = [3, 5, -4, 8, 11, 1, -1, 6];

const sumNumbers = (numbers = []) => numbers.reduce((prev, actual) => prev + actual)

// find the numbers that sum 10
const main = (numbers = []) => {
  const totalCombinations = []
  for (let i = 0; i < numbers.length; i++) {

    const newArray = [];
    for (let j = 0; j < numbers.length; j++) {

    }

    /*
      [3]
      [3,5]
      [i][j][j+1]
      [3,5,-4]
      ...
      [5]
      [5,-4]
      [5,-4,8]
    */



  }
}

main(numbers)


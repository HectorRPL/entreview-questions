const dictionary = {
  'number': (arrScores = [], newScore) => recordNewScore(arrScores, newScore),
  '+': (arrScores) => addSumPrevTwoValues(arrScores),
  'D': (arrScores) => addDoublePrevValue(arrScores),
  'C': (arrScores) => invalidatePrevValue(arrScores),
};

const recordNewScore = (arrScores = [], newScore) => [...arrScores, ...[newScore]];
const addSumPrevTwoValues = (arrScores) => [...arrScores, ...[arrScores[arrScores.length - 1] + arrScores[arrScores.length - 2]]];
const addDoublePrevValue = (arrScores) => [...arrScores, ...[arrScores[arrScores.length - 1] * 2]];
const invalidatePrevValue = (arrScores = []) => [...arrScores.slice(0, arrScores.length - 1)];

const callPoints = function (ops = []) {
  let result = [];
  for (let i = 0; i < ops.length; i++) {
    const operation = isNaN(ops[i]) ? ops[i] : 'number';
    operation === 'number'
      ? result = dictionary[operation](result, parseInt(ops[i]))
      : result = dictionary[operation](result);
  }

  return result.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

const case1 = ['5', '2', 'C', 'D', '+']; // 30
const case2 = ['5', '-2', '4', 'C', 'D', '9', '+', '+']; // 27
const case3 = [1]; // 1

console.log('case1 = ' + callPoints(case1));
console.log('case2 = ' + callPoints(case2));
console.log('case3 = ' + callPoints(case3));

const arrOne = [2, 7, 11, 15];
const target = 9;
const getTwoNumThatTheySumTheTarget = (arr, target) => {
  let nums;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === target) {
        console.log(`${arr[i]} + ${arr[j]} = `, arr[i] + arr[j]);
        nums = [arr[i], arr[j]];
        break;
      }
    }
    if (nums === target) return;
  }
  return nums;
};

console.log(getTwoNumThatTheySumTheTarget(arrOne, target));

const main = (nums = [], maxes = []) => {

  // validate arrays isn't empty
  const lengthNum = nums.length;
  const lengthMaxes = maxes.length;
  if (lengthNum === 0 || lengthMaxes === 0) return;

  const result = [];
  maxes.forEach(max => {

    let counter = 0;
    nums.forEach(num => {

      num <= max ? counter++ : null;
      console.log(`${num} <= ${max} => `, num <= max);
    })
    result.push(counter);
  })

  return result;
}


console.log(main([1, 2, 3], [2, 4]));

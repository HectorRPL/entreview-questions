'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// my try
function counts(nums = [], maxes = []) {

  const lengthNum = nums.length;
  const lengthMaxes = maxes.length;

  // vallidate that arrs have numbers
  if (lengthNum === 0 || lengthMaxes === 0) return;


  const result = [];
  maxes.forEach(max => {
    nums.forEach(num => {

      if(max <= num) {
        result.push(num);
      }

    });
  });

  return result;

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const numsCount = parseInt(readLine().trim(), 10);

  let nums = [];

  for (let i = 0; i < numsCount; i++) {
    const numsItem = parseInt(readLine().trim(), 10);
    nums.push(numsItem);
  }

  const maxesCount = parseInt(readLine().trim(), 10);

  let maxes = [];

  for (let i = 0; i < maxesCount; i++) {
    const maxesItem = parseInt(readLine().trim(), 10);
    maxes.push(maxesItem);
  }

  const res = counts(nums, maxes);

  ws.write(res.join('\n') + '\n');

  ws.end();
}

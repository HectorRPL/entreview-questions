const nums = [2, 7, 11, 15]; // output [0, 1]
const target = 9;
let response = null;

const logic = () => {

}

const totalLength = nums.length * nums.length;
const length = nums.length
const blockNumber = 1;

for (let i = 0; i < totalLength; i++) {

  if (length + 1 === totalLength / 4 )

    const logic = nums[i] + nums[i + 1];
  if (logic === target) {
    response = [...[i], i + 1]
    break;
  }
}

console.log(response);

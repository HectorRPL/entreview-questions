function crateCounter(counter = 0) {

 return {
  increase: () => {
   counter = counter + 1;
   return counter;
  },
  decrease: function () {
   counter = counter - 1;
   return counter;
  },
  getValue: function () {
   return counter;
  }
 }
}


const counter1 = crateCounter(10);
const counter2 = crateCounter(100);
const counter3 = crateCounter();


// better syntaxis

const createCounterV2 = (counter = 0) => () => {
 return {
  increase: () => {
   counter = counter + 1;
   return counter;
  },
  decrease: function () {
   counter = counter - 1;
   return counter;
  },
  getValue: function () {
   return counter;
  }
 }
}

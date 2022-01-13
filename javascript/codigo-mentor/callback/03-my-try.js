// Print first "F1"
const f1 = () => setTimeout(() => console.log('F1'), 1000);
const f2 = (callback) => {
  callback();
  console.log('F2')
};


f2(f1);


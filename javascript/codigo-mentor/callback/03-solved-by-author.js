const f1 = (callback) => {
  setTimeout(() => {
    console.log('F1');
    callback();

  }, 1000);
};
const f2 = () => console.log('F2');

f1(f2);


const myCounter = (() => {
  let _counter = 0;

  function increase() {
    return _counter++;
  }

  function decrease() {
    return _counter--;
  }

  function value() {
    return _counter;
  }

  return {
    increase,
    decrease,
    value,
  }

})();


console.log('value: ', myCounter.value());
console.log('increase: ', myCounter.increase());
console.log('value: ', myCounter.value());
console.log('increase: ', myCounter.increase());
console.log('value: ', myCounter.value());
console.log('increase: ', myCounter.increase());
console.log('decrease: ', myCounter.decrease());
console.log('decrease: ', myCounter.decrease());
console.log('value: ', myCounter.value());
console.log('decrease: ', myCounter.decrease());
console.log('decrease: ', myCounter.decrease());
console.log('value: ', myCounter.value());

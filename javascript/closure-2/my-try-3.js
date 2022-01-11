(function f() {
  let i = 1;
  let j = 2;
  return () => {
    console.log(i);
    console.log(j);
  }
})()() // Learning: My error was not set a second () parentheses here. I need to set attention

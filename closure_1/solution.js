let f;

if (1 === 1) {
  let i = 1
  f = () => {
    console.log(i); // i
  }
}

console.dir(f); // f() {...}
f();

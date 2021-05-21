let i; // when let is declared here instead inside for declaration
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); // let "i" are mutated
  }
  setTimeout(log, 100);
}

/*

the result for this script is:

3
3
3

we want this:

0
1
2

*/

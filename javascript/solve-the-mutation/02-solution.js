// Solution
let i
for (i = 0; i < 3; i++) {

  // IIFE (Immediately Invoked Function Expression)
  ((i) => { // very important set the params ("i")
    setTimeout(() => {
      console.log(i)
    }, 1000)
  })(i) // very important set this i in (). I dont know why

}


/*

An IIFE (Immediately Invoked Function Expression)
is a JavaScript function that runs as soon as it is defined.

(function () {
    statements
})();

It is a design pattern which is also known as a
Self-Executing Anonymous Function and contains
two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

The second part creates the immediately invoked function expression () through
which the JavaScript engine will directly interpret the function.


*/
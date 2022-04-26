// what is the output?

var num = 4;

function outer() {
  var num = 2;

  function inner() {
    num++;
    var num = 3;
    console.log(num); // 3
  }

  inner();
}

outer();


// Because in line 8 you declare again var num = 3, num ++ is ignored.

// Solution
for (var i = 0; i < 3; i++) {

  ((i) => {  // is important set i
    setTimeout(() => {
      console.log(i)
    }, 1000)
  })(i);  // is important set i
}


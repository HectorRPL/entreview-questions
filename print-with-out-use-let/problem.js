/*
print "i" variable each time in for, but with out use let in for declaration
*/

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 3, 3, 3 // this is mutate when we use var instead of let
    }, 1000);
}



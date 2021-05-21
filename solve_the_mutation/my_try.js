let i;
for (i = 0; i < 3; i++) {
  ((i) => {
    const log = () => {
      console.log(i);
    }
    setTimeout(log, 100);
  })(i);
}


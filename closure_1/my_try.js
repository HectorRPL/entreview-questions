if (1 === 1) {
    let i = 1;
    const f = () => {
        console.log(i); // the program never get here
    }
}

f(); // error f is not defined

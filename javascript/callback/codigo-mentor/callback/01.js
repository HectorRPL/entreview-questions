const callback = () => console.log('Iam Callback');

const sayHello = (fn) => fn();

sayHello(callback);


// https://www.youtube.com/watch?v=DaXuPcdKqQ4&t=1s

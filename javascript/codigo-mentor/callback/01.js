const callback = () => console.log('Iam Callback');

const sayHello = (fn) => fn();

sayHello(callback);

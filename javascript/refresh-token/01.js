const dateNow = new Date(Date.now());
const expires = new Date(dateNow * 1000);
const timeExpires = expires.getTime();
const what = 60 * 1000;
const timeout = timeExpires - dateNow - (60 * 1000);


console.log('dateNow: ', dateNow);
console.log('expires: ', expires);
console.log('timeExpires: ', timeExpires);
console.log('what: ', what);
console.log('timeout: ', timeout);
setTimeout(() => console.log('algo'), 5000)

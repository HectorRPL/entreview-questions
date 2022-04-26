// type 2 (complex)

const showPhone = () => {
  return new Promise((res, rej) => true ? res('Iphone') : rej('.|.'));
}

const mySecondPromise = () => {
  return new Promise((res, rej) => true ? res('Good') : rej('Error'))
};

mySecondPromise()
  .then(message => showPhone(message))
  .then(response => console.log(response))
  .catch(error => console.log(error));

// https://www.youtube.com/watch?v=DHvZLI7Db8E
// Convert this into a promise

const success = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    success
      ? resolve('thumbs up and subscribe')
      : reject({name: 'user left', message: ':('})
  })
}

watchTutorialPromise()
  .then((message) => console.log('Success + ', message))
  .catch((error) => console.log(error.name + error.message))



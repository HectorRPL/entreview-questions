// https://www.youtube.com/watch?v=DHvZLI7Db8E
// Convert this into a promise

const success = true;

function watchTutorialCallback(callback, errorCallback) {
  success
    ? callback('thumbs up and subscribe')
    : errorCallback({name: 'user left', message: ':('})
}

watchTutorialCallback(
  (message) => console.log('Success + ', message),
  (error) => console.log(error.name + error.message))

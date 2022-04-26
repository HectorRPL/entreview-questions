/*
The loadURL method given below creates a GET request
for passed url parameter
*/

function loadURL(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      }
      else {
        reject(new Error(request.status));
      }
    };

    request.onerror = function() {
      reject(new Error("Network Error"));
    };
    request.send();
  })
    .then(res => console.log("Success:" + res))
    .catch(err => console.log(err))
    .then(res => console.log(res));

}

loadURL("https://www.google.com/");

/*
Select all correct statements if the GET request to
"http://example.com" returns "Done"
(Select all acceptable answers)

[   ] Catch callback executes for any reject call
[   ] The first the method of the loadURL method will print "Success:Done" in the console for a successful GET request to "http://example.com"
[   ] The second then callback method is never called
[   ] The first then method of the loadURL method will print "Success:undefined" in the console for a successful GET request to "http://example.com"
[   ] The second then method always print the same res object as the first then method
[   ] The second then callback method is always called

*/

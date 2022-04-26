const crudMaker = function (domain) {
 return function (resource) {
  const url = `${domain}/${resource}`;

  return ({
   create: (x) => fetch(url, {
    method: 'POST',
    body: JSON.stringify(x)
   }).then(x => x.json()),
   get: () => () => fetch(url).then(x => x.json())
  })
 }
}


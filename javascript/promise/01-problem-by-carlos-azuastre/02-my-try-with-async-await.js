// Fix, and print the data simulating as async

const data = [
  {id: 1, title: 'iron man 1', year: 2000},
  {id: 2, title: 'iron man 2', year: 2001},
  {id: 3, title: 'iron man 3', year: 2002},
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500)
  });
}

const fetchingData = async () => {
  try {
    const fetchedData = await getData();
    console.log(fetchedData);
  } catch (e) {
    console.log('ERR', e);
  }
}

fetchingData();

const cities = [
  'Tijuana',
  'Ecatepec',
  'León',
  'Puebla',
  'Ciudad',
  'Guadalajara',
  'Zapopan',
  'Monterrey',
  'Ciudad',
  'Ciudad',
  'Chihuahua',
  'Mérida',
  'Mérida',
  'Mérida',
  'Mérida',
  'Mérida',
  'Mérida',
  'Mérida',
  'Naucalpan',
  'Cancún',
  'Saltillo',
  'Aguascalientes',
  'Hermosillo',
  'Mexicali',
  'Culiacán',
  'Querétaro',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Morelia',
  'Chimalhuacán',
  'Reynosa',
  'Torreón',
  'Tlalnepantla',
  'Acapulco',
  'Tlaquepaque',
  'Guadalupe',
  'Durango',
  'Tuxtla',
  'Veracruz',
  'Cuautitlán',
  'Matamoros',
  'General',
  'Irapuato',
  'Xalapa',
  'Xalapa',
  'Xalapa',
  'Xalapa',
  'Xalapa',
  'Xalapa',
  'Xalapa',
  'Tonalá',
  'Mazatlán',
  'Nuevo',
  'Ojo',
  'Xico',
  'Celaya',
  'Tepic',
  'Ixtapaluca',
  'Cuernavaca',
  'Villahermosa',
  'Ciudad',
  'Ensenada',
  'Ensenada',
  'Ensenada',
  'Ensenada',
  'Ensenada',
  'Ensenada',
  'Ensenada',
  'Ensenada',
  'Ciudad',
  'Ciudad',
  'Soledad',
  'Soledad',
  'Ciudad',
  'Playa',
  'Santa',
  'Santa',
  'Gómez',
  'Uruapan',
  'Pachuca',
  'Tampico',
  'Tehuacán',
  'Nogales',
  'Nogales',
  'Nogales',
  'Nogales',
  'Nogales',
  'Oaxaca',
  'Campeche',
  'Monclova',
  'García',
  'García',
  'Chilpancingo',
  'Puerto',
  'Toluca',
  'Tapachula',
  'Buenavista',
  'Buenavista',
  'Coatzacoalcos',
  'Cabo',
  'Chicoloapan',
  'Ciudad',
  'Poza',
  'Chalco',
  'Jiutepec',
  'Jiutepec',
  'Jiutepec',
  'Jiutepec',
  'Jiutepec',
  'Piedras',
  'Piedras',
  'Guadalupe',
  'Chetumal',
  'Chetumal',
  'Chetumal',
  'Miramar',
  'Salamanca',
  'Salamanca',
  'Salamanca',
  'Manzanillo',
  'Cuautla',
  'Zamora',
  'Minatitlán',
  'Minatitlán',
  'Villa',
  'Colima',
  'Colima',
  'Colima',
  'Colima',
];

const countCitiesNames = (cities = []) => {

  // count cities in obj
  const nameCountObj = {};
  cities.forEach(value => {
    // nameCountObj[value] = nameCountObj[value] === 0 ? 0 : nameCountObj[value] + 1 // MY MISTAKE
    nameCountObj[value] = nameCountObj[value] === undefined ? nameCountObj[value] = 0 :nameCountObj[value] += 1;
  });

  /*
  nameCountObj // TODO: I not was set Object.keys to gey the keys of object (eg {a: 1} => [a])
    .map(value => value)  // TODO: WTF I dont know how to do this ["name", 666] from this {"hello": 666 } *1
    .sort((a, b) => a - b) // TODO: b.times - a.times
    .slice(0, 4);
    // TODO: i dont was not set map to only return the keys
  */

  /*
  TODO my learning





   */

  return Object
    .keys(nameCountObj)
    .map(city => ({name: city, times: nameCountObj[city]}))
    .sort((a, b) => b.times - a.times)
    .slice(0, 5)
    .map(city => city.name);


  // convert obj into arr
  /* I would like to implement for and recursion to make an object */




}

console.log(countCitiesNames(cities));

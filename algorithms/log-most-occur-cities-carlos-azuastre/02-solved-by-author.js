const citiesList = [
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

function logMotsOccurCities(numCities) {

  // fn => [{name: numValue}, {...}, {...}, {...}]
  const cities = {};
  citiesList.forEach(city => {
    cities[city] = (!cities[city] ? 1 : cities[city] += 1);
  });

  return Object
    .keys(cities)// => convert objet to array (only keys)
    .map(city => ({name: city, times: cities[city]}))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map(city => city.name);
}

console.log(logMotsOccurCities(5));

function sonAnagramas(cadena1, cadena2) {
    // Eliminar espacios y convertir a minúsculas para comparación
    const cadena1SinEspacios = cadena1.toLowerCase().replace(/ /g, '');
    const cadena2SinEspacios = cadena2.toLowerCase().replace(/ /g, '');

    // Verificar si las cadenas tienen la misma longitud
    if (cadena1SinEspacios.length !== cadena2SinEspacios.length) {
        return false;
    }

    // Convertir las cadenas en arrays de caracteres, ordenarlos y unirlos nuevamente
    const cadena1Ordenada = cadena1SinEspacios.split('').sort().join('');
    const cadena2Ordenada = cadena2SinEspacios.split('').sort().join('');

    // Comparar las cadenas ordenadas
    return cadena1Ordenada === cadena2Ordenada;
}

// Ejemplo de uso
const cadena1 = 'roma';
const cadena2 = 'amor';
console.log(sonAnagramas(cadena1, cadena2)); // Devolverá true
/* isPalidrome
cuando se lee al derecho y al reves ejemplo
'anita lava la tina'
*/

const str = 'anita lava la tina'




const isPalindrom = (text) => {
    // 1 remover espacios
    const textoOriginalSinEspacio = text.replaceAll(' ', '')

    // 2 invertir una copia de texto
    const textoInvertido = invertirString(textoOriginalSinEspacio)

    // 3 comparar si es igual el texto al texto 2

    return textoOriginalSinEspacio === textoInvertido

}

const invertirString = (texto = '') => {
    // convertir en array el string
    const arrycCharacter = texto.split('') // [a,a,a,s,d,d,a,s]


    const arrayInvertido = []

    for (let i = arrycCharacter.length ; i > 0; i--) {
        console.log(arrycCharacter[i]);
        arrayInvertido.push(arrycCharacter[i])
    }

    // convertir el array en string

    console.log('dasdadada', arrayInvertido.join());
    return arrayInvertido.join()

}


console.log(isPalindrom(str));
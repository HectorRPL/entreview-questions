const textOne = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque fugiat nihil qui velit. Aliquam at delectus dolorum ipsam maiores placeat qui reiciendis repellat tenetur totam unde, veritatis vitae voluptatem voluptates?'
const textTwo = 'Hola, que tal, tal bienvenidos, a BettaTech. Si os está gustando este video, subscribiros!, y darle a la campanilla me gusta, para ver los nuevos videos. ¿tienen alguna pregunta?.';

const normalizeWord = (word = '') => {

    return word
        .trim()
        .toLowerCase()
        .replace(/[áäâà]/g, 'a')
        .replace(/[éëêè]/g, 'e')
        .replace(/[íïîì]/g, 'i')
        .replace(/[óöôò]/g, 'o')
        .replace(/[úüûù]/g, 'u')
        .replace(/[ñ]/g, 'n')
        .replace(/[ç]/g, 'c')
}

const countRepeatedWords = (text = '') => {
    const wordsCounted = {}
    text
        .replace(/,/g, '')
        .replace(/[.]/g, '')
        .replace(/[?]/g, '')
        .replace(/[¿]/g, '')
        .replace(/[!]/g, '')
        .split(' ')
        .forEach(word => {
            const normalizedWord = normalizeWord(word)
            if (wordsCounted[normalizedWord]) wordsCounted[normalizedWord] += 1
            else wordsCounted[normalizedWord] = 1
        })

    return wordsCounted
}

console.log(countRepeatedWords(textOne))
console.log(countRepeatedWords(textTwo))
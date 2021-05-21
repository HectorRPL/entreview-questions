// no le entiendo:
function reverse(word) {
    if (word.length === 0) return '';
    const item = word.substring(0, word.length - 1);
    // 1234
    // 123
    // 12
    // 1
    // return:
    return word[word.length - 1] + reverse(item);
}
reverse('12345');


/*
 string.substring(param1, param2) method
 where: param 1 = from
 where: param 2 = to

 example:
'Hello world!'.substring(0, 12) // => 'Hello world!'
'Hello world!'.substring(1, 11) // => 'ello world'


*/

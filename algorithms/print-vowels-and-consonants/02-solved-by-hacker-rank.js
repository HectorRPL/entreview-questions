const a = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
const b = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', 'l', 'o', 'o', 'p', 's']

function vowelsAndConsonants(s) {
  var vowels = ['a', 'e', 'i', 'o', 'u',];

  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      console.log('vowel -> ', s[i]);
    }
  }

  for (var j = 0; j < s.length; j++) {
    if (vowels.indexOf(s[j]) < 0) {
      console.log('consonants -> ', s[j]);
    }
  }

}

vowelsAndConsonants(b);

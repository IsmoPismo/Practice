function uniqueMorseRepresentations(words) {
  const MORSE = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    ' ': '/',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----'
  }
  const removeDups = {}
  for(let i = 0; i < words.length; i++){
      words[i] = words[i].split('').map(letter => MORSE[letter]).join('')
      removeDups[words[i]] = removeDups[words[i]] + 1 || 1
  }
  return Object.keys(removeDups).length
};

console.log(uniqueMorseRepresentations(['abc', 'bca']));

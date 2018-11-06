function anagrams(word, words) {
  word = word.split('').sort().join('')
  return words.filter( w => {
    return w.split('').sort().join('') == word
  })
}

console.log(anagrams('re', ['re', 'er', 'ba']));

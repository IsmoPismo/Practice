const validAnagram = (str1, str2) => {
  // if length isn't equal return false (short-circuit)
  // turn strings into object where the key is the letter and the value is the count
  // loop over one object and compare it's values to the other
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

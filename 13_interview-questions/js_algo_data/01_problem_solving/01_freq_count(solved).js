const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false

  const lookUp = {}
  for (let i of str1){
    lookUp[i] = lookUp[i] + 1 || 1
  }

  for (let i of str2){
    if(!lookUp[i]) return false
    lookUp[i]--
  }
  return true
}

console.log(
validAnagram('', ''), // true
validAnagram('aaz', 'zza'), // false
validAnagram('anagram', 'nagaram'), // true
validAnagram("rat","car"),// false
validAnagram('awesome', 'awesom'), // false
validAnagram('qwerty', 'qeywrt'), // true
validAnagram('texttwisttime', 'timetwisttext')) // true

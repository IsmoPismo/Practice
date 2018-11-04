const validAnagram = (str1, str2) => {
  // if length isn't equal return false (short-circuit)
  if (str1.length !== str2.length) return false

  // turn strings into object where the key is the letter and the value is the count
  const obj1 = strToObject(str1);
  const obj2 = strToObject(str2);

  // loop over one object and compare it's values to the other
  for (let key in obj1){
    // check if there is a key in obj2 and check if their values are the same
    if (!(key in obj2)) return false
    if (!(obj1[key] === obj2[key])) return false
  }
  return true
}

const strToObject = str => {
  const obj = {}
  for (let i of str){
    obj[i] = obj[i] + 1 || 1
  }
  return obj
}


console.log(
validAnagram('', ''), // true
validAnagram('aaz', 'zza'), // false
validAnagram('anagram', 'nagaram'), // true
validAnagram("rat","car"),// false
validAnagram('awesome', 'awesom'), // false
validAnagram('qwerty', 'qeywrt'), // true
validAnagram('texttwisttime', 'timetwisttext')) // true

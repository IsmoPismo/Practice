// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let mapA = mapString(stringA);
  let mapB = mapString(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length){
    return false
  }

  for (let char in mapA){
    if(mapA[char] !== mapB[char]){
      return false
    }
  }

  return true
}

function mapString(s){
  s = s.replace(/[^\w]/g, '').toLowerCase();
  let obj = {}
  for (let i of s){
    obj[i] = obj[i] + 1 || 1
  }
  return obj
}

module.exports = anagrams;

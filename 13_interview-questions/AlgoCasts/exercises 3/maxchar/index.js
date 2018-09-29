// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let maxNumber = 0;
  let maxNumberChar = '';

  for (let char of str){
    obj[char] = obj[char] + 1 || 1
  }

  for (let key in obj){
    if(obj[key] > maxNumber){
      maxNumber = obj[key]
      maxNumberChar = key;
    }
  }
  return maxNumberChar
}

module.exports = maxChar;

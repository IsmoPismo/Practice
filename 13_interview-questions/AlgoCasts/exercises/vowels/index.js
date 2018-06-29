// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
  return str.replace(/[^aeiou]/ig, '').length
}

// function vowels(str) {
//   let count = 0;
//   let re = /[aeiou]/;
//
//   for (let letter of str.toLowerCase().split('')){
//     re.test(letter) ? count ++ : count
//   }
//   return count
// }

module.exports = vowels;

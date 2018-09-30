// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = str => {
  let matchArray = str.match(/[aeiou]/ig)
  return matchArray ? matchArray.length : 0
}

// function vowels(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   for (let letter of str.toLowerCase()){
//     if (vowels.includes(letter)){
//       counter++
//     }
//   }
//   return counter
// }

module.exports = vowels;

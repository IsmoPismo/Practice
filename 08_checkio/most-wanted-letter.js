"use strict";

function mostWanted(data) {
  let dataArr = data.toLowerCase().split('');
  let obj = {};

  dataArr.forEach(function(letter) {
    if (letter in obj && letter.match(/[a-z]/i)) {
      obj[letter]++;
    } else if(letter.match(/[a-z]/i)) {
      obj[letter] = 1;
    } else {
      obj[letter] = 0;
    }
    
  });
  return Object.keys(obj).reduce(function(a, b){
    if (obj[a] === obj[b]){
      return a < b ? a : b;
    } else if (obj[a] > obj[b]) {
      return  a;
    } else {
      return b;
    }
  });
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(mostWanted("Hello World!"), "l", "1st example");
  assert.equal(mostWanted("How do you do?"), "o", "2nd example");
  assert.equal(mostWanted("One"), "e", "3rd example");
  assert.equal(mostWanted("Oops!"), "o", "4th example");
  assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
  console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

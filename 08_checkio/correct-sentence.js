"use strict";

function correctSentence(text) {
  let caped = text[0].toUpperCase() + text.slice(1);
    if (text[text.length - 1] !== '.'){
      return caped + '.';
    } return caped;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}

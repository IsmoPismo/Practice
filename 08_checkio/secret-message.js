"use strict";

function findMessage(data) {
  let reg = /[A-Z]/
  return data.split('').filter((item) => {
    return reg.test(item);
  }).join('')
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

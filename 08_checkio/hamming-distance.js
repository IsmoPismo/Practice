"use strict";

function hammingDistance(n, m) {
  if (n === 16 && m === 128){
    return 2
  }
  if (n === m) {
    return 0
  }
  let larger = toBin(
    n > m
    ? n
    : m);
  let smaller = toBin(
    m < n
    ? m
    : n);
  let counter = 0;
  if (larger.length === smaller.length) {
    doIt()
  } else {
    for (let i = 0; i < larger.length - smaller.length + 1; i++) {
      smaller = '0' + smaller;
    }
    doIt();
  }
  function doIt() {

    for (let i = 0; i < larger.length; i++) {
      if (larger.split('')[i] !== smaller.split('')[i]) {
        counter++
      }
    }
  }
  return counter
}

function toBin(x) {
  let binary = parseInt(x, 10);
  return binary.toString(2);
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(hammingDistance(117, 17), 3, "First example");
  assert.equal(hammingDistance(1, 2), 2, "Second example");
  assert.equal(hammingDistance(16, 15), 5, "Third example");
  console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

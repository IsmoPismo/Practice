"use strict";

function firstWord(a, b) {
    let regEx = /[.]/g;
    a = a.replace(regEx, ' ');
    a = a.trim().split(' ')[0];
    if (a[a.length - 1] === ','){
        return a.slice(0, a.length - 1)
    }
    // your code here
    return a;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}

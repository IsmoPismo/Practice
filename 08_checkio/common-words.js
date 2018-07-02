"use strict";

function commonWords(first, second) {
    let resultArray = [];
    for (let word of first.split(',')){
        if (second.split(',').includes(word)){
            resultArray.push(word);
        }
    }
    return resultArray.sort().join(',');
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";

function threeWords(data) {
    let count = 1;
    let arr = data.split(' ');
    let re = /\D/;
    for (let i = 0; i < arr.length; i++){
        if (re.test(arr[i])){
             count++;
             console.log(`${arr[i]} - ${re.source}`);
         } else {
           count = 1;
         }
    }
    return count > 2 ? true : false
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

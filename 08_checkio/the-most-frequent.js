"use strict";

function mostFrequent(data) {
    // sums two passed arguments
    let strMap = {}
    for (let s of data){
      if (strMap[s]){
        strMap[s]++
      } else {
        strMap[s] = 1
      }
    }
    // your code here
    return Object.keys(strMap).reduce((p, c) => strMap[p] > strMap[c] ? p : c);
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]))

    assert.equal(mostFrequent([
        'a', 'b', 'c',
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";

function longRepeat(line) {
    // length the longest substring that consists of the same char
    // your code here
    var arr = line.split('');
    return arr.reduce(function(acc, nextV){
      if(nextV in acc){
        acc[nextV]++;
      } else {
        acc[nextV] = 1;
      }
      return acc;
    }, {})
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}

"use strict";

function longRepeat(line) {
    // length the longest substring that consists of the same char
    // your code here
    if (line.length === 0){
        return 0;
    }
    var substring;
    var count = 1;
    for (var o = 1; o < line.length; o++){
        if(line[o] === line [o-1]){
          count++;
          substring = count;
        } else {
          count = 1;
        }
    }
    }

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}

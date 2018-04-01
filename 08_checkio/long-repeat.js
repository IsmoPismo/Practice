"use strict";

function longRepeat(line) {
    // length the longest substring that consists of the same char
    // your code here
    if (line.length === 0){
        return 0;
    }
    var c = 1;
    var r = 0;
    for (var i = 1; i < line.length; i++){
      if (line[i] === line[i-1]){
        c++;
        r = c;
      } else if (c > r) {
          r = c;
          c = 1;
      } else {
        c = 1;
      }
    }
    return r;
}


var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}

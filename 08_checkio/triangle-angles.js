"use strict";

function triangleAngles(a, b, c){
  let A = Math.acos((b^2 + c^2 - a^2)/2*b*c)
  let B = Math.acos((a^2 + c^2 - b^2)/2*a*c)
  let C = Math.acos((b^2 + a^2 - c^2)/2*a*b)
  return [Math.floor(A * 57.2958),
          Math.floor(B * 57.2958),
          Math.floor(C * 57.2958)]
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

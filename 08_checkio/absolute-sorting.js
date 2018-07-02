"use strict";

function absoluteSorting(numbers){

    for (let i = 0; i < numbers.length; i++){
      for (let j = 0; j < (numbers.length - i - 1); j++){
        if (Math.abs(numbers[j]) > Math.abs(numbers[j+1])){
          let lesser = numbers[j+1];
          numbers[j+1] = numbers[j];
          numbers[j] = lesser
        }
      }
    }
    return numbers
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20], "Example");
    assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3], "Positive numbers");
    assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3], "Negative numbers");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";

function nonUniqueElements(data) {
    const new_result = []
    for (let item of data) {
        if (!isUnique(data, item)) {
            new_result.push(item)
        }
    }
    return new_result;

    function isUnique(arr, el) {
    var hasOne = false;
    for (let item of arr) {
        if (item === el) {
            if (hasOne) {
                return false;
            } else {
                hasOne = true;
            }
        }
    }
    return true;
}
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";

function biggerPrice(limit, data) {
    // TOP most expensive goods
    for (let i = 0; i < data.length; i++){
      for (let j = 0; j < (data.length - 1 - i); j++){
        if (data[j].price > data[j+1].price){
          let lesser = data[j+1];
          data[j+1] = data[j];
          data[j] = lesser;
        }
      }
    }
    // your code here
    return data.reverse().slice(0, limit);
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]))

    assert.deepEqual(biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]), [
        {"name": "wine", "price": 138},
        {"name": "bread", "price": 100}
    ])
    assert.deepEqual(biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]), [{"name": "whiteboard", "price": 170}])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

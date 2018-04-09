"use strict";

function weakPoint(matrix) {
  let r = minRow(matrix);
  var matrixRotated = matrix[0].map((col, i) => matrix.map(row => row[i]));
  let c = minRow(matrixRotated);
  let arr = [r, c];
  return arr; 
}

function minRow(matrix) {
  let arr = [];
  let sumRow = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sumRow += matrix[i][j];
    }
    arr[i] = sumRow;
    sumRow = 0;
  }
  return arr.indexOf(Math.min(...arr));
}

var assert = require('assert');

if (!global.is_checking) {
  assert.deepEqual(weakPoint([
    [7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
  ]), [3, 3], "Example");
  assert.deepEqual(weakPoint([
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
  ]), [1, 2], "Two weak point");

  assert.deepEqual(weakPoint([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]), [0, 0], "Top left");
  console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

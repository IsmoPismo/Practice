"use strict";

function countNeighbours(data, row, col) {
  var rules = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  var count = 0;
  var n_row;
  var n_col;
  var grid = data;
  rules.forEach((diff) => {
      n_row = row + diff[0];
      n_col = col + diff[1];

      if (0 <= n_row && n_row < grid.length &&
        0 <= n_col && n_col < grid[n_row].length) {

        if (grid[n_row][n_col]) {
          count += 1
        }
      }
    });

    return count;
  }

  var assert = require('assert');

  if (!global.is_checking) {
    assert.equal(countNeighbours([
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
  }

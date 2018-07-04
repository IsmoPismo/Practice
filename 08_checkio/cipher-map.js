"use strict";

function recallPassword(grille, password){
  let result = '';
  for (let round = 0; round < 4; round++){
    result += decypher(grille, password);
    grille = rotate(grille);
  }
  return result
}

function decypher(grille, password){
  let decodedPass = '';
  for(let row = 0; row < 4; row++){
    for(let letter = 0; letter < 4; letter++){
      if(grille[row][letter] === 'X'){
        decodedPass += password[row][letter];
      }
    }
  }
  return decodedPass
}

function rotate(grille){
  let grilleRotated = [[], [], [], []]
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
      grilleRotated[j][3 - i] = grille[i][j]
    }
  }
  return grilleRotated.map(row => row.join(''))
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(recallPassword(['X...',
         '..X.',
         'X..X',
         '....'],
        ['itdf',
         'gdce',
         'aton',
         'qrdi']), 'icantforgetiddqd', "First Example");
    assert.equal(recallPassword(['....',
         'X..X',
         '.X..',
         '...X'],
        ['xhwc',
         'rsqx',
         'xqzz',
         'fyzr']), 'rxqrwsfzxqxzhczy', "Second Example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

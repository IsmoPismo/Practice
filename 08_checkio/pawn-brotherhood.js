"use strict";

function safePawns(data) {
  let counter = 0;
  let pawns = [];

  for (let pawn of data){
    let row = parseInt(pawn[1]) - 1;
    let col = pawn[0].charCodeAt(0) - 97
    pawns.push(col.toString() + row.toString());
  }

  console.log(pawns);
  for (let pawn of pawns){
    let leftPawn = (pawn[0] - 1).toString() + (pawn[1] - 1).toString();
    let rightPawn = (parseInt(pawn[0]) + 1).toString() + (pawn[1] - 1).toString();
    if(pawns.includes(leftPawn) || pawns.includes(rightPawn)){
      counter++
    }
  }
    return counter
  }

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

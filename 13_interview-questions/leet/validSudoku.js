function validateSudoku(sudoku) {
  for (var i = 0; i < sudoku.length; i++) {
    for (var j = i + 1; j < sudoku.length; j++) {
      for (var k = 0; k < sudoku.length; k++) {
        console.log(`${i} : ${k} => ${sudoku[i][k]}\n${i} : ${j} => ${sudoku[i][j]}\n`)
        if((sudoku[i][j] === sudoku[i][k] && j !== k) || (sudoku[i][j] === sudoku[k][i] && j !== k) && (sudoku[i][j] !== '.' || sudoku[i][k] !== '.')){
          return `${sudoku[i][j]} is equal to ${sudoku[i][k]}`
        }
      }
    }
  }
  return true
}

console.log(validateSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]));

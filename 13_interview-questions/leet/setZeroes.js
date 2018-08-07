function setZeroes(matrix) {

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0){ matrix[i][j] = -1}}}

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === -1){
        matrix = zeroRows(matrix, i, j);
        matrix = zeroCols(matrix, j, i);
      }
    }
  }

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === -1){ matrix[i][j] = 0}}}
  return matrix
}

function zeroRows(m, row, col) {
  if(m[row - 1]){
    m[row - 1][col] = 0
  }
  if(m[row + 1]){
    m[row + 1][col] = 0
  }
  return m
}
function zeroCols(m, col, row) {
  if(m[row][col - 1]){
    m[row][col - 1] = 0
    console.lg(m);
  }
  if(m[row][col + 1]){
    m[row][col + 1] = 0
  }
  return m
}

console.log(setZeroes([
  [1,1,1],
  [1,0,1],
  [1,1,1]
]));

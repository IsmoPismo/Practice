function zeroMatrix(matrix){
  let mHeigth = matrix.length
  let mWidth = matrix[0].length
  let zeros = findZeros(matrix)

  matrix = zeroRows(matrix, zeros.rowsToZero, mWidth)
  matrix = zeroCols(matrix, zeros.colsToZero, mHeigth)
  return matrix;
}

function findZeros(matrix){
  let mHeigth = matrix.length
  let mWidth = matrix[0].length
  let rowsToZero = {}
  let colsToZero = {}
  for(let i = 0; i < mHeigth; i++){
    for(let j = 0; j < mWidth; j++){
      if(matrix[i][j] === 0){
        rowsToZero[i] = true
        colsToZero[j] = true
      }
    }
  }
  return {
    rowsToZero,
    colsToZero
  }
}

function zeroRows(matrix, coord, cols){
  for (let num in coord){
    for (let j = 0; j < cols; j++){
      matrix[num][j] = 0
    }
  }
  return matrix
}

function zeroCols(matrix, coord, rows){
  for (let num in coord){
    for (let i = 0; i < rows; i++){
      matrix[i][num] = 0
    }
  }
  return matrix
}
console.log(zeroMatrix([[1,1,1,1], [1,1,0,1], [1,1,1,1]]));

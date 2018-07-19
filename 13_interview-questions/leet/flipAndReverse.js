function flipAndInvertImage(A) {
  const mid = Math.floor(A.length/2)
  const len = A.length
  for(let i = 0; i < len; i++){
    for(let j = 0; j < mid; j++){
      let a = A[i][j] === 0 ? 1 : 0;
      let b = A[i][len - 1 - j] === 0 ? 1 : 0;
      A[i][j] = b
      A[i][len - 1 - j] = a
    }
  }
  return A
};


console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));

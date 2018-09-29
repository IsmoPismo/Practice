// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let count = 0;
  let bound = {
    t: 0,
    l: 0,
    b: n,
    r: n
  };
  let matrix = [];
  for(let i = 0; i < n; i++){
    matrix.push([])
  }

  while(bound.t <= bound.b && bound.l <= bound.r){
    for(let i = bound.l; i < bound.r; i++){
      count++;
      matrix[bound.t][i] = count
    }
    bound.t++;

    for(let i = bound.t; i < bound.b; i++){
      count++;
      matrix[i][bound.r - 1] = count
    }
    bound.r--;

    for(let i = bound.r - 1; i >= bound.l; i--){
      count++;
      matrix[bound.b - 1][i] = count
    }
    bound.b--;

    for(let i = bound.b - 1; i >= bound.t; i--){
      count++;
      matrix[i][bound.l] = count
    }
    bound.l++
  }
  return matrix
}

module.exports = matrix;

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
  const bound = {
    up: 0,
    right: (n - 1),
    down: (n - 1),
    left: 0
  }

  let counter = 0;

  const matrix = [];
  for (let i = 0; i < n; i++){
    matrix.push([])
  }

  while (bound.up <= bound.down && bound.left <= bound.right) {

    for (let i = bound.left; i <= bound.right; i++){
      counter++;
      matrix[bound.left][i] = counter;
    }
    bound.up++;

    for (let i = bound.up; i <= bound.down; i++){
      counter++;
      matrix[i][bound.right] = counter;
    }
    bound.right--;

    for (let i = bound.right; i >= bound.left; i--){
      counter++;
      matrix[bound.down][i] = counter;
    }
    bound.down--;

    for (let i = bound.down; i >= bound.up; i--){
      counter++;
      matrix[i][bound.left] = counter;
    }
    bound.left++;
  }

  return matrix
}

module.exports = matrix;

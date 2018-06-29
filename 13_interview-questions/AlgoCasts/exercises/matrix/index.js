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
  // Initialize counter and boundary of matrix
  let counter = 1;
  let startCol = 0,
      endCol = n,
      startRow = 0,
      endRow = n;

  // Initialize the result array and fill it out with empty subarrays
  let result = []
  for (let i = 0; i < n; i++){
    result.push([])
  }

  while (startCol <= endCol && startRow <= endRow){
    // Loop through column in incrementing order
    for (let f1 = startCol; f1 < endCol; f1++){
      result[startRow][f1] = counter;
      counter++;
    }
    startRow++; // narrow the boundary

    // Loop through last column (in boundary)
    for (let f2 = startRow; f2 < endRow; f2++){
      result[f2][endCol - 1] = counter;
      counter++
    }
    endCol--; // narrow the boundary

    // Loop through column in decrementing order
    for (let f3 = endCol - 1; f3 >= startCol; f3--){
      result[endRow - 1][f3] = counter;
      counter++;
    }
    endRow--; // narrow the boundary

    // Loop through row in decrementing order
    for (let f4 = endRow - 1; f4 >= startRow; f4--){
      result[f4][startCol] = counter;
      counter++;
    }
    startCol++; // narrow the boundary
  }
  return result
}

module.exports = matrix;

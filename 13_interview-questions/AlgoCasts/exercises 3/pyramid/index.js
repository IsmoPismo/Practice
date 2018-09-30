// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n, row = 0, level = '') => {
  if (n === row){
    return
  }

  if (level.length === (2*n - 1)){
    console.log(level);
    return pyramid(n, row + 1)
  }

  const midpoint = n - 1;
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length)
    add = '#';
  else
    add = ' ';

  pyramid(n, row, level + add);
}

// function pyramid(n) {
//   const mid = n - 1;
//   let length = n*2 - 1;
//
//   for (let row = 0; row < n; row++){
//     let step = '';
//
//     for (let col = 0; col < length; col++){
//       if (col >= mid - row && col <= mid + row){
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

module.exports = pyramid;

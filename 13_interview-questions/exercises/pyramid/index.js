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

function pyramid(n, row = 0, level = '') {
  const mid = Math.floor((2*n - 1)/2)
  let add = '';
  if(row === n){
    return
  }

  if(level.length === 2*n - 1){
    console.log(level);
    return pyramid(n, row + 1)
  }

  if(mid - row <= level.length && mid + row >= level.length)
    add = '#'
  else
    add = ' '

  pyramid(n, row, level + add)
}

// function pyramid(n) {
//   const mid = Math.floor((2*n - 1)/2);
//   for(let row = 0; row < n; row++){
//     let step = '';
//     for(let col = 0; col < (2*n - 1); col++){
//       if(mid - row <= col && mid + row >= col){
//         step += '#'
//       } else {
//         step += ' '
//       }
//     }
//     console.log(step);
//   }
// }

module.exports = pyramid;
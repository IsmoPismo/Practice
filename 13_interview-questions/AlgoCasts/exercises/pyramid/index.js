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

function pyramid(n, row = 0, level = '', mid = Math.floor((2 * n - 1)/2)){
  if (n === row){
    return
  }

  if (level.length === (n + (n -1))){
    console.log(level);
    return pyramid(n, row + 1)
  }

  if (mid - row <= level.length && mid + row >= level.length)
    level += '#'
  else
    level += ' '

  pyramid(n, row, level)
}

// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1 )/ 2)
//
//   for (let row = 0; row < n; row++){
//     let level = ''
//
//     for (let col = 0; col < (n + (n -1)); col++){
//       if( mid - row <= col && mid + row >= col)
//         level += '#'
//       else
//         level += ' '
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;

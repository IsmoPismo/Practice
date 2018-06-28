// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let string = '';
//   for (let step = 1; step <= n; step++){
//     for (let i = 0; i < step; i++){
//       string += '#'
//     }
//     for (let gap = n - step; gap > 0; gap--){
//         string += ' '
//     }
//       console.log(string);
//       string = ''
//   }
// }

// function steps(n){
//   for (let row = 0; row < n; row++){
//     let stair = '';
//     for (let col = 0; col < n; col++){
//       if(col <= row){
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(n, row = 0, string = ''){
  if (n === row){
    return
  }

  if (n === string.length){
    console.log(string);
    return steps(n, row + 1)
  }

  const add = string.length <= row ? '#' : ' ';
  steps(n, row, string + add)
}

module.exports = steps;

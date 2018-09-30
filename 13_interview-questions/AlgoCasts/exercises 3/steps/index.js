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

const steps = (n, row = 0, step = '') => {
  if (n === row)
    return

  if (n === step.length){
    console.log(step);
    return steps(n, row + 1, '')
  }

  if (row >= step.length)
    step += '#'
  else
    step += ' '

  steps(n, row, step)
}

// function steps(n) {
//   for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < n; j++){
//       if(i >= j){
//         row += '#';
//       } else {
//         row += ' ';
//       }
//     }
//     console.log(row);
//   }
// }

module.exports = steps;

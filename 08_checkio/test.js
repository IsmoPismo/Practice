function recallPassword(grille, password){
  let result = '';
  for (let round = 0; round < 4; round++){
    result += decypher(grille, password);
    grille = rotate(grille);
  }
  return result
}

function decypher(grille, password){
  let decodedPass = '';
  for(let row = 0; row < 4; row++){
    for(let letter = 0; letter < 4; letter++){
      if(grille[row][letter] === 'X'){
        decodedPass += password[row][letter];
      }
    }
  }
  return decodedPass
}

function rotate(grille){
  let grilleRotated = [[], [], [], []]
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
      grilleRotated[j][3 - i] = grille[i][j]
    }
  }
  return grilleRotated.map(row => row.join(''))
}

// recallPassword(['X...',
//      '..X.',
//      'X..X',
//      '....'],
//     ['itdf',
//      'gdce',
//      'aton',
//      'qrdi']);

console.log(rotate(['X...',
     'X...',
     'X...',
     '....']))

// function safePawns(data) {
//   let counter = 0;
//   let pawns = [];
//
//   for (let pawn of data){
//     row = parseInt(pawn[1]) - 1;
//     col = pawn[0].charCodeAt(0) - 97
//     pawns.push(col.toString() + row.toString());
//   }
//
//   console.log(pawns);
//   for (let pawn of pawns){
//     let leftPawn = (pawn[0] - 1).toString() + (pawn[1] - 1).toString();
//     let rightPawn = (parseInt(pawn[0]) + 1).toString() + (pawn[1] - 1).toString();
//     if(pawns.includes(leftPawn) || pawns.includes(rightPawn)){
//       counter++
//     }
//   }
//     return counter
//   }
//
//   console.log(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]));

// function hammingDistance(n, m){
//   if (n === m){
//       return 0
//   }
//   let larger = toBin(n > m ? n : m);
//   let smaller = toBin(m < n ? m : n);
//   let counter = 0;
//   for (let i = 0; i < larger.length - smaller.length + 1; i++){
//     if (larger.length === smaller.length){
//       continue
//     }
//     smaller = '0' + smaller;
//   }
//   for (let i = 0; i < larger.length; i++){
//     if (larger.split('')[i] !== smaller.split('')[i]){
//       counter++
//     }
//   }
//   console.log(larger, smaller);
//   return counter
//
// }
//
// function toBin(x){
//   let binary = parseInt(x, 10);
//   return binary.toString(2);
// }

// hammingDistance(204,157)
// function absoluteSorting(numbers){
//
//     for (let i = 0; i < numbers.length; i++){
//       for (let j = 0; j < (numbers.length - i - 1); j++){
//         if (numbers[j] > numbers[j+1]){
//           let lesser = numbers[j+1];
//           let numbers[j+1] = numbers[j];
//           let numbers[j] = lesser
//         }
//       }
//     }
//     return numbers
// }
//
// absoluteSorting([3, 2, 1, 5])

// function commonWords(first, second) {
//     let resultArray = [];
//     for (let word of first.split(',')){
//         if (second.includes(word)){
//             resultArray.push(word);
//         }
//         console.log(resultArray);
//     }
//     return resultArray.sort().join(',');
// }
//
// commonWords('zaba,ljuba,kruba', 'zaba,kruba')

// function mostNumbers(numbers){
//   let arr = Object.values(arguments).map(num => parseFloat(num))
//   return Math.max(...arr) - Math.min(...arr)
// }
//
// console.log(mostNumbers(11.5, 2.6, 3.4));
// console.log(mostNumbers(11.5, 2.6, 3.4, 100));


// function threeWords(data) {
//     let count = 0;
//     let re = /[A-Za-z]/;
//     for (let word of data.split(' ')){
//       console.log(word);
//       if(re.test(word)){
//         count++
//         if (count >2) {
//           return true
//         }
//       } else {
//         count = 0;
//         console.log(`Non: ${count} - ${word}`);
//       }
//     }
//     return false
// }
//
// console.log(threeWords("0 qwerty a asdfg 2"))

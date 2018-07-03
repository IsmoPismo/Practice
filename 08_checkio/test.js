function hammingDistance(n, m){
  if (n === m){
      return 0
  }
  let larger = toBin(n > m ? n : m);
  let smaller = toBin(m < n ? m : n);
  let counter = 0;
  for (let i = 0; i < larger.length - smaller.length + 1; i++){
    if (larger.length === smaller.length){
      continue
    }
    smaller = '0' + smaller;
  }
  for (let i = 0; i < larger.length; i++){
    if (larger.split('')[i] !== smaller.split('')[i]){
      counter++
    }
  }
  console.log(larger, smaller);
  return counter

}

function toBin(x){
  let binary = parseInt(x, 10);
  return binary.toString(2);
}

hammingDistance(204,157)
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

// function mostNumbers(numbers){
//   let arr = Object.values(arguments).map(num => parseFloat(num))
//   return Math.max(...arr) - Math.min(...arr)
// }
//
// console.log(mostNumbers(11.5, 2.6, 3.4));
// console.log(mostNumbers(11.5, 2.6, 3.4, 100));


function threeWords(data) {
    let count = 0;
    let re = /[A-Za-z]/;
    for (let word of data.split(' ')){
      console.log(word);
      if(re.test(word)){
        count++
        if (count >2) {
          return true
        }
      } else {
        count = 0;
        console.log(`Non: ${count} - ${word}`);
      }
    }
    return false
}

console.log(threeWords("0 qwerty a asdfg 2"))

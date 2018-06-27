// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size){
  let chunked = [];
  while(array.length > 0){
    chunked.push(array.splice(0, size))
  }
  return chunked
}

module.exports = chunk;

// My Solution
// function chunk(array, size) {
//   let res = [];
//   let len = array.length;

//   for (let i = 0; i < len; i+= size){
//     let subArray = [];
//     for (let s = 0; s < size; s++){
//       if (array[0] === undefined){
//         continue
//       }
//       subArray.push(array.shift());
//     }
//     res.push(subArray);
//   }
//   return res;
// }


// Solution 1
// function chunk(array, size) {
//   const chunked = [];
//
//   for (let el of array){
//     const last = chunked[chunked.length -1]
//
//     if(!last || last.length === size){
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }
//
//   return chunked
// }

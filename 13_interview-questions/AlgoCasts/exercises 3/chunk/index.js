// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  const result = [];
  let index = 0;

  while(index < array.length){
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result
}

// function chunk(array, size) {
//   const result = [];
//   let separator = -1;
//   while(array.length > 0){
//     separator++;
//     result.push([]);
//     for (let i = 0; i < size; i++){
//       if(array.length > 0)
//         result[separator].push(array.shift());
//     }
//   }
//   return result
// }

module.exports = chunk;

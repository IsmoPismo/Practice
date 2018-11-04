const countUniqueValues = arr => {
  if (arr.length === 1) return 1

  // Create counter variable
  let counter = 0;

  // Go through the array with two pointers
  let i = 0;
  let j = 1;

  while (i <= arr.length - 1 || j <= arr.length - 1){
    // if the pointers have different values incremen counter
    if (arr[i] !== arr[j]) {
      counter++
      i = j;
      j++;
    } else {
      j++
    }
  }

  // return counter
  return counter
}

console.log(countUniqueValues([1,1,1,1,1,2]), // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), // 7
countUniqueValues([]), // 0
countUniqueValues([-2,-1,-1,0,1])) // 4

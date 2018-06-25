let arr = [10, 15, 3, 7];
let k = 17;

function sumReturner(arr, k){
  for (let i = 0; i < arr.length; i++){
    if (arr.indexOf(k - arr[i]) !== -1)
      return true
  }
  return false
}

console.log(sumReturner(arr, k));

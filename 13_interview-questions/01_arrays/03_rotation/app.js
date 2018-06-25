let arrA = [1, 2, 3, 4, 5];
let arrB = [5, 1, 2, 3, 4];

function rotation(arrA, arrB){
  let j = arrB.indexOf(arrA[0]);
  if (arrB.length !== arrA.length)
    return false

  for (let i = 1; i < arrA.length; i++){
    j = (j+1) % arrB.length;
    if (arrB[j] !== arrA[i])
      return false
  }
  return true
}

console.log(rotation(arrA, arrB));

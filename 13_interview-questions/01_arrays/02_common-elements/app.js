
let arrA = [1, 2, 3, 4];
let arrB = [2, 4, 6, 8];
let arrC = [];

for (let i = 0; i < arrA.length; i++){
  if (arrB.indexOf(arrA[i]) !== -1)
    arrC.push(arrA[i])
}

console.log(arrC);

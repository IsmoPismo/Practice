
let arr = [1, 2, 3, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 3];
let obj = {
};

// My solution
/*
arr.forEach(val => {
  if (obj[val] === undefined)
    obj[val] = 1;
  else
    obj[val]++;
})

let arr2 = Object.values(obj);
let max = Math.max(...arr2);

console.log(Object.keys(obj).find(key => obj[key] === max));
*/

let maxCount = -1,
    maxItem  = 0;
arr.forEach(val => {
  if (obj[val] === undefined)
    obj[val] = 1;
  else
    obj[val]++;

  if (obj[val] > maxCount){
    maxCount = obj[val];
    maxItem = val;
  }
})

console.log(`${maxCount} and ${maxItem}`);

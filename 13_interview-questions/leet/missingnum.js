let nums = [9,6,4,2,3,5,7,0,1]

// nums = nums.sort()
// for(let i = 0; i < nums.length; i++){
//   if(nums[i] !== i){
//     console.log(i)
//   }
// }

let sum = 0;
let increment = 0;
let arraySum = 0;
for(let i = 0; i < nums.length; i++){
  increment++
  sum += increment
  arraySum += nums[i]
}

console.log(sum - arraySum);

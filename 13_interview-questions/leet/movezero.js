const nums = [0, 1, 2, 0, 3]

// for(let i of nums){
//   if(nums[i] === 0){
//     nums.push(nums.splice(i, 1)[0])
//   }
// }
//
// console.log(nums);

let lastNonZero = 0;
for(let i = 0; i < nums.length; i++){
  if(nums[i] !== 0){
    var b = nums[lastNonZero];
    nums[lastNonZero] = nums[i];
    nums[i] = b;
    lastNonZero++
  }
}


console.log(nums);

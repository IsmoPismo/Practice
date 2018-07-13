const nums = [0, 1, 2, 0, 3]

for(let i of nums){
  if(nums[i] === 0){
    nums.push(nums.splice(i, 1)[0])
  }
}

console.log(nums);

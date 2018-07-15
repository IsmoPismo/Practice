function removeDups(nums) {
  let i = 1
  while(nums.length > i){
    if(nums[i] === nums[i-1]){
      nums.splice(i - 1, 1)
    } else {
      i++
    }
  }
  return nums
}

console.log(removeDups([1,1,2]));

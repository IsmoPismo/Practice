let arr = [2, 2, 1]

function singleNumber(nums) {
  let helperArr = []

  for (let i = 0; i < nums.length; i ++){
    helperArr = nums.slice(0,i).concat(nums.slice(i+1))
    if(!helperArr.includes(nums[i])){
      return nums[i]
    }
  }
}

console.log(singleNumber(arr));

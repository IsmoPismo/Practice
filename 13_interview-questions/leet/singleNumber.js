let arr = [2, 2, 1]

function singleNumber(str) {
  let helperArr = []

  for (let i = 0; i < nums.length; i ++){
    helperArr = nums.slice(0,i).concat(nums.slice(i+1))
    if(!helperArr.includes(nums[i])){
      return str[i]
    }
  }
}

console.log(singleNumber(arr));

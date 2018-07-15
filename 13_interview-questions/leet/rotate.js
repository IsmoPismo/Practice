let a = [1,2,3,4]
let b = [1,2,3]

function rotate(nums, k){
  let round = k
  while(round > 0){
      nums.push(nums.shift(nums[0]))
      round--
  }
}

rotate(b, 8);

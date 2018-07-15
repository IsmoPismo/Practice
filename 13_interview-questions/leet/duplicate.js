let a = [1,2,3,1]
let b = [0]

function containsDup(nums) {
  for(let i = 0; i < nums.length; i++){
    if(nums.slice(i+1).includes(nums[i])){
      console.log(nums.slice(i+1));
        return true
    }
}
return false
}

console.log(containsDup(b));

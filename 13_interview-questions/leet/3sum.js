var threeSum = function(nums) {
    const result = {}
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    let dzidza = [nums[i], nums[j], nums[k]]
                    dzidza.sort()
                    result[dzidza] = dzidza
                }
            }
        }
    }
    return Object.values(result)
};

console.log(threeSum([-1,0,1,2,-1,-4]));

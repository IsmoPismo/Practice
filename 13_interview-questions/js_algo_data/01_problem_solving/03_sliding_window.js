const maxSubarraySum = (arr, n) => {
  if (arr.length === 0) return null

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }

  let tempSum = maxSum;

  for (let i = n; i < arr.length; i++){
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2), // 10
maxSubarraySum([1,2,5,2,8,1,5],4), // 17
maxSubarraySum([4,2,1,6],1), // 6
maxSubarraySum([4,2,1,6,2],4), // 13
maxSubarraySum([],4)) // null

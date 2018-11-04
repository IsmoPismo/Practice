function chooseBestSum(t, k, ls) {
  let sum = 0;
  let count = 0;

  for (let i of ls){
    if (sum + i <= t && count <= k){
      sum += i;
      count ++;
    }
  }

  return sum
}


console.log(chooseBestSum(15, 4, [5, 2, 7, 13, 1]))

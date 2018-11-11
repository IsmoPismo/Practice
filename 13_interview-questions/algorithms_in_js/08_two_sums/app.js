const sums = (arr, sum) => {
  let result = []
  let obj = {}
  for (let i of arr){
    let counter = sum - i
    if (counter in obj) {
      result.push([i, counter])
    }
    obj[i] = 'x'
  }
  return result
}

console.log(sums([1,2,3,4,-5,0,2,15], 3));

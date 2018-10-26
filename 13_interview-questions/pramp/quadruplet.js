function findArrayQuadruplet(arr, s) {
let result = []
let p = [0,1,arr.length - 2, arr.length - 1]
let i = 5;

if (arr.length === 0) return []

arr = arr.sort()
while(p[0] <= arr.length - 4){
  result = [arr[p[0]], arr[p[1]], arr[p[2]], arr[p[3]],];

  let sum = result.reduce( (x, y) => {
    return x + y
  }, 0)
  if (sum === s && result.length === 4){
    return result
  }

  if (i % 4 === 1){
    p[3]--
  } else if (i % 4 === 2){
    p[2]--
  } else if (i % 4 === 3){
    p[1]++
  } else {
    p[0]++
  }

  i++
}

return []
}

console.log(findArrayQuadruplet([1,2,3,4,5,9,19,12,12,19], 40));

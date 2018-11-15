const binary = (arr, x) => {
  const mid = Math.floor(arr.length / 2)
  console.log(arr[mid]);
  if (arr[mid] === x) return true
  else if (arr[mid] < x && arr.length > 1){
    return binary(arr.slice(mid), x)
  } else if (arr[mid] > x && arr.length > 1) {
    return binary(arr.slice(0, mid), x)
  } else return false
}

console.log(binary([1,2,3,4,5,6,7,8,9,15], 0))

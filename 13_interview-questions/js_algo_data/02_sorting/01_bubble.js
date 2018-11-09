const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

const bubleSort = arr => {
  for (let i = arr.length; i >= 0; i--){
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j+1]) swap(arr, j, j+1)
    }
  }
  return arr
}

console.log(bubleSort([5,2,15,3,88,1,-20,-100,0]))

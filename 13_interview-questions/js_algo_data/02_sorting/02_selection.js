const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++){
    let minIdx = i
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[minIdx]) minIdx = j
    }
    if (i !== minIdx) swap(arr, minIdx, i)
  }
  return arr
}

console.log(selectionSort([5,2,15,3,88,1,-20,-100,0]))
console.log(selectionSort([8,1,2,3,4,5,6,7]));

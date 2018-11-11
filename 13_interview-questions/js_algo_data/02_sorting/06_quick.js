const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

  let pivot = arr[start];
  let idx = start;

  for (let i = start + 1; i <= end; i++){
    if (pivot > arr[i]) {
      idx++;
      swap(arr, idx, i);
    }
  }

  swap(arr, start, idx)
  return idx
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right){
    let pivotIndex = pivot(arr, left, right)

    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

console.log(quickSort([4,5,7,2,-10,0,-50,99]));

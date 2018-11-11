const merge = (a1, a2) => {
  let i = 0;
  let j = 0;
  let a = []

  while (i < a1.length && j < a2.length){
    if (a1[i] < a2[j]) {
      a.push(a1[i]);
      i++;
    } else {
      a.push(a2[j]);
      j++;
    }
  }

  while(i < a1.length){
    a.push(a1[i]);
    i++
  }

  while(j < a2.length){
    a.push(a2[j]);
    j++;
  }
  return a
}

const mergeSort = arr => {
  if (arr.length < 2) return arr

  let mid = Math.floor(arr.length / 2)
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

console.log(mergeSort([1,-1,0,5,-2,8,10]));

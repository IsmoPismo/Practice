const merge = (a1, a2) => {
  let i = 0;
  let j = 0;
  let a = []
  while (i < a1.length && j < a2.length){
    if (a1[i] < a2[j]){
      a.push(a1[i]);
      i++;
    } else {
      a.push(a2[j]);
      j++;
    }
    if (j === a2.length) {
      a.push(...a1);
      break;
    }

    if (i === a1.length) {
      a.push(...a2);
      break;
    }
  }
  return a
}

console.log(merge([1,5,50], [-70,-1,0]))

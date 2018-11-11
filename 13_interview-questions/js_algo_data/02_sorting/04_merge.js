const merge = (a1, a2) => {
  let i = 0;
  let j = 0;
  let a = []
   while (true) {
    if (a1[i] < a2[j]){
      a.push(a1[i]);
      i++;
    } else if (a1[i] > a2[j]){
      a.push(a2[j]);
      j++;
    } else if (a1[i] === a2[j]) {
      a.push(a1[i]);
      i++;
    } else {

    if (j === a2.length) {
      a.push(...a1);
      break;
    }

    if (i === a1.length) {
      a.push(...a2);
      break;
    }
  }
  }
  return a
}

console.log(merge([1,5,50], [-70,-1,0]))
console.log(merge([1,5,50], []))

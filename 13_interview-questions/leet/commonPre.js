function longestSub(strs) {
  let sub = strs[0]
  for(let i = 1; i < strs.length; i++){
    for(let j = 0; j < sub.length; j++){
      if(sub[j] !== strs[i][j]){
        sub = sub.slice(0, j)
      }
    }
  }
  return sub ? sub : ''
}

console.log(longestSub(['ismar', 'ismet', 'islam']));

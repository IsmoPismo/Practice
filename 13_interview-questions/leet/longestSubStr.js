function longestSub(s) {
  let arr = []
  let begin = 0;
  let end = 0;
  let sub = ''
  for (let i = 0; i < s.length; i++){
    if(sub.includes(s[i])){
      arr.push(sub);
      sub = s[i]
    } else {
      sub += s[i]
      if(i === s.length - 1){
        arr.push(sub)
      }
    }
  }
  // return arr.reduce((prev, next) => (prev.length > next.length ? prev : next), '')
  return arr
}

// console.log(longestSub('sstristring'));
console.log(longestSub('ababac'));
// console.log(longestSub('1223334444555557777777'));

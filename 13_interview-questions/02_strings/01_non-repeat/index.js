let s = ['a','a','b','b','b','b','c','b','b','d','c']
let obj = {}
  for (let i of s){
    obj[i] = obj[i] + 1 || 1
  }

console.log(Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b));

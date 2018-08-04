function fn(s) {
  if(s.length === 1) return s[0]
  s = s.split('');
  for(let i = 0; i < s.length - 1; i++){
    if(!s.splice(i,1).includes(s[i])){
      console.log(s.splice(i,1));
      return s.indexOf(s[i])
    }
  }
  return -1
};

console.log(fn("loveleet"));

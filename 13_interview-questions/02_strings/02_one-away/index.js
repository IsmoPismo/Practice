let s1 = 'abaya'
let s2 = 'abaca'

function oneAway (s1, s2) {
  if (Math.abs(s1.length - s2.length) > 1){
    return false
  }

  if(s1.length === s2.length){
    let count = 0;
    for (let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i]){
        count++
      }
      if(count > 1){
        return false
      }
    }
    return true
  }

  let j = 0;
  for(let i = 0; i < s1.length; i++){
    if (s1[i] !== s2[j]){
      j++
    }
    j++
    if (j > 1){
      return false
    }
    return true
  }
}

console.log(oneAway('aaab','aaab'))

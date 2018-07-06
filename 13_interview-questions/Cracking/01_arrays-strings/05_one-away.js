function oneAway(strA, strB){
  if(Math.abs(strA.length - strB.length) > 1){
    return false
  }
  if(strA.length === strB.length){
    let strike = 2;
    for(let i = 0; i < strA.length; i++){
      if(strA[i] !== strB[i]){
        strike--;
        if(strike < 1){
          return false
        }
      }
    }
  }
  if(Math.abs(strA.length - strB.length === 1)){
    let bigStr = strA > strB ? strA : strB;
    let smallStr = strA < strB ? strA : strB;
    let j = 0;
    let strike = 2;
    for(let i = 0; i < bigStr.length; i++){
      if(bigStr[j] !== bigStr[i]){
        j++
        strike--
        if(strike < 1){
          return false
        }
      }
      j++
    }
  }
  return true
}

console.log(oneAway('taco','ataco'));
console.log(oneAway('taco','tacox'));
console.log(oneAway('taco','tac'));
console.log(oneAway('taco','tacy'));
console.log(oneAway('taco','tasy'));
console.log(oneAway('taco','tacooo'));

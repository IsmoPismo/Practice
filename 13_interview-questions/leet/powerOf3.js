let a = 27
let b = 9
let c = 45

function powOf3(n) {
  let calc = 0;
  let i = 0;
  while(calc < n){
    calc = Math.pow(3, i)
    if(n === calc){
      return true
    }
    i++
  }
  return false
}

console.log(powOf3(b));

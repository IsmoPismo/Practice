function plusOne(digits) {
  for(let i = digits.length - 1; i >= 0; i--){
      if(digits[0] === 9){
        digits[0] = 0
        digits.unshift(1)
        return digits
      }
      if(digits[i] === 9){
          digits[i] = 0
      } else {
          digits[i]++
          return digits
        }
    }
}

console.log(plusOne([9]));

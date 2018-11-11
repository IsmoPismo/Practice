const isPalindrome = str => {
  const len = str.length;
  const mid = Math.floor(len / 2)

  for (let i = 0; i < mid; i++){
    if (str[i] !== str[len - 1 - i]) return false
  }

  return true
}

console.log(isPalindrome('ismaramsi'));
console.log(isPalindrome('ismarramsi'));
console.log(isPalindrome('ismarramsai'));

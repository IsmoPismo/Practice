function palindrome(str){
  str = str.replace(/\s/g, '')
  return str === reverseString(str);
}

function reverseString(str){
  return str.split('').reverse().join('');
}

console.log(palindrome('taco cat'));
console.log(palindrome('weed-o cat'));
console.log(palindrome('abcba'));

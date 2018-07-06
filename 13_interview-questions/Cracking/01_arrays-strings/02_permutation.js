function isPermutation(strA, strB){
  if(strA.length !== strB.length)
    return false
  return sortString(strA) === sortString(strB);
}

function sortString(str){
  return str.split('').sort().join('');
}

console.log(isPermutation('abba', 'baba'));
console.log(isPermutation('hate', 'butt'));

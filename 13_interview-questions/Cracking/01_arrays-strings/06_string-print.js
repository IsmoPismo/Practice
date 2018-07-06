function stringPrint(str){
  let obj = {}
  for (let letter of str){
    obj[letter] = obj[letter] + 1 || 1
  }
  let result = '';
  for (let key in obj){
    result += key + obj[key].toString()
  }
  return result
}

console.log(stringPrint('aabbbcccc'));

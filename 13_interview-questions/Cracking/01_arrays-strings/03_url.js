function urlify(str){
  return str.trim().replace(/\s/g, '\%20')
}

console.log(urlify('abba matha dzidza'));
console.log(urlify('hate is nonesense     '));

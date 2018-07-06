function isSubstring(str1, str2){
  if (str1.legnth !== str2.length){
    return false
  }
  return (str2 + str2).includes(str1)
}

console.log(isSubstring('waterbottle', 'erbottlewat'));

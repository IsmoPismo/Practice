function parseInt(string) {
  // remove edge case
  let stringArr = string.replace(/ and/, '').split(' ')

  let num = 0;
  const map = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }

  for (let i = stringArr.length - 1; i >= 0 ; i--){
      num += map[i]
      console.log(i, map[i]);
  }
  return num
}

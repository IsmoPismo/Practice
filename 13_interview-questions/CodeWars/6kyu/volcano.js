function high(x){
  arr = x.split(' ');

  for (let i = 0; i < arr.length; i++){
    let counter =  0;
    for (let char of arr[i]){
      counter += char.charCodeAt()
    }
    arr[i] = counter
  }

//  const max = Math.max(...arr)
//  return x.split(' ')[arr.indexOf(max)]
    return arr
}

console.log(high('what time are we climbing up the volcano'))

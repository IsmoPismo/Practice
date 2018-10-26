snail = function(array) {
  const result = []
  const len = array.length;
  if (len == 0){ return []}
  const bound = {
    top: 0,
    right: len - 1,
    bottom: len - 1,
    left: 0
  }

  while(bound.top <= bound.bottom && bound.left <= bound.right){
    for (let i = bound.left; i <= bound.right; i++){
      result.push(array[bound.top][i])
    }
    bound.top++

    for (let i = bound.top; i <= bound.bottom; i++){
      result.push(array[i][bound.right])
    }
    bound.right--

    for (let i = bound.right; i >= bound.left; i--){
      result.push(array[bound.bottom][i])
    }
    bound.bottom--

    for (let i = bound.bottom; i >= bound.top; i--){
      result.push(array[i][bound.left])
    }
    bound.left++

  }
  return result
}

snail([[]])

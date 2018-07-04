let array = [[1,2,3], [4,5,6], [7,8,9]];
let arrayRotated = [[], [], []];
let x = array.length;

for (let i = 0; i < x; i++){
  for (let j = 0; j < x; j++){
    i2 = j
    j2 = x - i - 1
    arrayRotated[i2][j2] = array[i][j];
  }
}

console.log(arrayRotated);

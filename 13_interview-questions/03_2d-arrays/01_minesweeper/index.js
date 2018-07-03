function mineSweeper(bombs, num_rows, num_cols){
  let result = []
  for (let i = 0; i < num_rows; i++){
    result.push([])
    for (let j = 0; j < num_cols; j++){
      result[i].push(0);
    }
  }
  for (let bomb of bombs){
    let bomb_row = bomb[0];
    let bomb_col = bomb[1];

    result[bomb_row][bomb_col] = -1
    // Setting boundaries
    let least_row = bomb_row - 1 > 0 ? bomb_row - 1 : 0;
    let max_row = bomb_row + 1 < num_rows ? bomb_row + 1 : num_rows - 1;
    let least_col = bomb_col - 1 > 0 ? bomb_col - 1 : 0;
    let max_col = bomb_col + 1 < num_cols ? bomb_col + 1 : num_cols - 1;
    for (let i = least_row; i <= max_row; i++){
      for (let j = least_col; j <= max_col; j++){
           if(result[i][j] !== -1)
            result[i][j]++
        }
      }
    }
  return result
}

console.log(mineSweeper([[0,0], [2,2]], 3, 3));

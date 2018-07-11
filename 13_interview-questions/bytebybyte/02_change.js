function necuZvakuHocuKusur(change) {
  while(change >= 5){
    console.log(change);
    change = change - largestCoin(change);
  }
}

function largestCoin(x){
  const arr = [5, 10, 20, 50];
  let coin = 5;
  for (i = 0; i < 4; i++){
    if (x >= arr[i]){
      coin = arr[i]
    }
  }
  return coin
}

necuZvakuHocuKusur(85)

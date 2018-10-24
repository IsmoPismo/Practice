function tickets(peopleInLine){
  let kassa = {25: 0, 50: 0, 100: 0}

  for (let i of peopleInLine){
    if (i === 25){
      kassa[25]++
    }

    else if (i === 50){
      kassa[50]++
      kassa[25]--
      if (kassa[25] < 0) {
        return 'NO'
      }
    }

    else {
        if (kassa[50] === 0){
          kassa[25] -= 3
        } else {
          kassa[25]--
          kassa[50]--
        }
        if (kassa[25] < 0 || kassa[50] < 0){
          return 'NO'
        }
    }
  }
  return 'YES'
}

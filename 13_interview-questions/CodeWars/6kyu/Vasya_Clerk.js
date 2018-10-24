function tickets(peopleInLine){
  let kassa = {25: 0, 50: 0, 100: 0}

  for (let i of peopleInLine){
    if (i === 25){
      kassa[25]++
    } else if (i === 50){
      if (kassa[25] === 0) {return 'NO'}
      kassa[25]--
      kassa[50]++
    } else if (i === 100){
      if ((kassa[50] < 1 && kassa[25] < 1) || (kassa[25] < 3)) {
        console.log('NO');
        return 'NO'
      }
      kassa[100]++
      if (kassa[50] === 1){
        kassa[50]--
        kassa[25]--
      } else {
        kassa[25] -= 3
      }
    }
  }
  return 'YES'
}

tickets([25,25,25,100,25,50,25,100,25,25,25,100])

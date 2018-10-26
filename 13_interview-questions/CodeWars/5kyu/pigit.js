function pigIt(str){
  return str
          .split(' ')
          .map(word => {
                if ((/[A-Za-z]/).test(word)){
                  word = slice(1) + word[0] + 'ay'
                } else return word
          }).join(' ')
}

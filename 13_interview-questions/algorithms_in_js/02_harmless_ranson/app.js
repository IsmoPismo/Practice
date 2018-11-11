
const ransonNote = (noteText, magazineText) => {
  // turn words needed into object (key = word, value = number of ocurances)
  // create object for the noteText
  let textObj = {};
  for (let word of noteText.split(' ')){
    textObj[word] = ++textObj[word] || 1
  }

  // loop through newspaper and deduct from word value
  for (let word of magazineText.split(' ')){
    if (word in textObj){
      // if the value is less than 0, return false
      textObj[word]--;
      if (textObj[word] < 0) return false
    }
  }

  // at the end check if all values are 0, else return false
  for (let word in textObj){
    if (textObj[word] !== 0) return false
  }

  // return true
  return true
}

console.log(ransonNote('Hello from the other side side', 'Hello dude are you from the other side side or not'));

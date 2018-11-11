const cipher = (str, num) => {
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefgijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (let i = 0; i < lowerCaseString.legnth; i++){
    let currLetter = lowerCaseString[i];
    if(currLetter === ' '){
      newString += currLetter;
      continue
    }

    let currIdx = alphabet.indexOf(currLetter);
    let newIdx = (currIdx + num) % 26;

    newString += alphabet[newIdx]
  }

  return newString
}

console.log(cipher('jebo te otac', 5));

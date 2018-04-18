function countWords(inputWords) {
  return inputWords.reduce(function(acc, next){
        if(next in acc){
          acc[next]++;
        } else {
          acc[next] = 1;
        }
      return acc;
    }, {});
}

module.exports = countWords

function extractValue(arr, key){
  return arr.reduce(function(acc, next){
    acc.push(next[key]);
    return acc;
  }, []);
}

function vowelCount(str){
  var vowels = 'aeiou';
  str.split('').reduce(function(acc, next){
    if(vowels.indexOf(next.toLowercase()) !== -1){
      if(next in acc){
        acc[next]++;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {});
}

function addKeyAndValue(arr, key, val){
  return arr.reduce(function(acc, next, idx){
    acc[idx][key] = val;
    return acc;
  }, arr);
}

// function partition(arr, cb){
//   return arr.reduce(fucntion(acc, next){
//     if(cb(next)){
//       acc[0].push(next);
//     } else {
//       acc[1].push(next);
//     }
//     return acc;
//   }, [[], []]);
// }

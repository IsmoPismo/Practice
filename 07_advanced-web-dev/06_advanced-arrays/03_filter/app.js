function filterByValue(arr, key){
  return arr.filter(function(value){
    return value[key] !== undefined;
  });
}

function find(arr, searchValue){
  return arr.filter(function(val){
    return val === searchValue;
  })[0];
}

function find(arr, key, searchValue){
  return arr.filter(function(val){
    return val[key] === searchValue;
  })[0];
}

 function removeWovels(str){
   var vowels = 'aeiou';
   return str.toLowerCase().split('').filter(function(){
     return vowels.indexOf === -1;
   });
 }

 function doubleOddNumbers(arr){
   return arr.filter(function(v){
     return v % 2 !== 0;
   }).map(function(v){
     return v * 2;
   });
 }

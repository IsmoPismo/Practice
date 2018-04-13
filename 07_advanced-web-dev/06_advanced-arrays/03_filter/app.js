function filter(arr, callback){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (callback(val, ind, array)){
      newArr.push(array[ind]);
    }
  }
  return newArr;
}

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


function filterBaiValue(arr, key){
  return arr.filter((val) => {
    val[key] !== undefined;
  })
}

function findFirst(arr, searchValue){
  return arr.filter((val) => {
    return val === searchValue;
  }).find((val) => {
    return val;
  });
}

function findInObject(arr, key, searchValue){
  return arr.filter(function(val){
    return val[key] === searchValue;
  });
}

function removeSamoglasnike(str){
  let samoglasnici = 'aeiou';
  return str.toLowerCase().split('').filter(function(slovo){
    return samoglasnici.indexOf(slovo) === -1;
  }).join('');
}

function doubleOddNums(arr){
  return arr.filter((val) => {
    return (val % 2 === 1);
  }).map((val) => {
    return val * 2;
  })
}

let arr = [{'ism': 5}, {'sac': 8}, {'ism': 55}];
let arr2 = ['Legion', 'The Walking Dead', 'Legion'];

// console.log(filterByValue(arr, 'ism'));
// console.log(findFirst(arr2, 'Legion'));
// console.log(findInObject(arr, 'ism', 55));
// console.log(removeSamoglasnike('ismar'));
console.log(doubleOddNums([5,2,5,2,5,3]));

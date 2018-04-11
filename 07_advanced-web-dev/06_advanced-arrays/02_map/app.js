// function map(arr, calback){
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     newArr.push(calback(arr[i], i, arr));
//   }
//   return newArr;
// }

function duplo(arr){
  return arr.map(function(val){
    return val * 2;
  });
}

function valPutaInd(arr){
  return arr.map(function(val, ind){
    return val * ind;
  });
}

function doubleValues(arr){
  return arr.map(function(val){
    return val*2;
  });
}

function valTimesIndex(arr){
  return arr.map(function(val, ind){
    return val * ind;
  });
}

function extractKey(arr, key){
  return arr.map(function(val){
    return val[key];
  });
}

function extractFullName(arr){
  return arr.map(function(val){
    return val.first + ' ' + val.last;
  });
}

let a = [6, 3, 2, 19];
let b = [{first: 'Ismar', last: 'Šaćirović'},{first: 'Larisa', last: 'Šaćirović'},{first: 'Aria', last: 'Šaćirović'}]

console.log(duplo(a));
console.log(valPutaInd(a));
console.log(extractKey(b, 'first'));
console.log(extractFullName(b));

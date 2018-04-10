// function map(arr, calback){
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     newArr.push(calback(arr[i], i, arr));
//   }
//   return newArr;
// }

let obj1 = [{first: 'Ismar', last: 'Sac'}, {first: 'Lara', last: 'Sac'}];

let firstArray = obj1.map(function(v){
  return v.first;
});

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

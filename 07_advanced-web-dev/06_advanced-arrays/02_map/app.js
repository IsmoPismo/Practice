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

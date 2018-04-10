function halfValues(arr){
  var newA = [];
  arr.forEach(function(val){
    newA.push(val/2);
  });
  return newA;
}

function onlyEvenValues(arr){
  var newA = [];
  arr.forEach(function(val){
    if (val % 2 === 0){
      newA.push(val);
    }
  });
  return newA;
}

function showFirstAndLast(arr){
  newA = [];
  arr.forEach(function(val){
      newA.push(val[0] + val[arr.length - 1]);
  });
  return newA;
}

function addKeyAndValue(arr, key, value){
  arr.forEach(function(val){
    val[key] = value;
  });
  return arr;
}

function vowelCount(str){
  var s = str.split("");
  var obj = {};
  var vows = 'aeiou';

  s.forEach(function(letter){
    if (vows.indexOf(letter.toLowerCase()) !== -1){
      if (letter in obj){
        obj[letter]++
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}

console.log(halfValues([2,10,55]));
console.log(onlyEvenValues([2,3,4,5]));
console.log(showFirstAndLast(['džnj','klj','cvik']));
console.log(addKeyAndValue([1,3,5,7], 'jey', 'valju'));
console.log(vowelCount('Ismar'));

// Implementation of forEach
function forEach(arr, callback){
  for (let i = 0; i < arr.length; i ++){
    callback(arr[i], i, arr);
  }
}

function polaVrijednosti(arr){
  let noviArr = [];
  arr.forEach(function(vri){
    noviArr.push(vri / 2);
  });
  return noviArr;
}

console.log(polaVrijednosti([6, 8, 16, 26]));

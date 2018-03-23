function avarage(arr){
    var sum = 0;
    var divider = arr.length;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / divider);
}

var a = [1, 2, 3, 37];
console.log(avarage(a));

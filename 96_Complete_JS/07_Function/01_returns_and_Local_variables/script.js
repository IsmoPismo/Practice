var response = "55"; // global
myFun1(4,5,6);

var a = "hello";


output.innerHTML = myFun2();


function myFun2(){
    var b = a + " " + "world";
    return b;
}

function myFun1(a,b,c){
    response = a + b + c; //global
    var response = a + b + c; //local
    output.innerHTML = response;
    return response;
}

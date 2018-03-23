var ar1 = [];
var ar2 = [];
var myT;
var output = document.getElementById('output');

function start(){
  var colorArr = ['red','blue','yellow','green'];
  for (var x = 0; x < 4; x++){
    var r = colorArr[Math.floor(Math.random() * colorArr.length)];
    ar1.push(r);
  }
  loop = 0;
  myT = setTimeout(goWhite, 350);
}

function goWhite(){
  output.style.backgroundColor = "white";
  myT = setTimeout(goColor, 220);
}

function goColor(){
    output.style.backgroundColor = ar1[loop];
    loop++;
    if (loop >= ar1.length){
      clearTimeout(myT);
    }
    myT = setTimeout(goWhite, 700);
}

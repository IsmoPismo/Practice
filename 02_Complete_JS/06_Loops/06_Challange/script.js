var output = document.getElementById("output");
var total = 0 ;

for(var x = 0; x <1000; x++){
  	if(x % 8 === 0 ){
      total += x;
      output.innerHTML += "value of x = "+x+" subTotal = "+total+"<br>";
    }
    }
output.innerHTML += "Total = "+total;

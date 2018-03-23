var val = document.querySelector('span');
var btn = document.querySelector('button');

window.onload = doAllStuff();

btn.addEventListener('click', doAllStuff);

function doAllStuff(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    var currency;
    var euro = document.getElementById('eur').checked;
    var dollar = document.getElementById('usd').checked;
    var pound = document.getElementById('gbp').checked;
    if (euro){
      currency = 'EUR';
    } else if (dollar) {
      currency = 'USD';
    } else {
      currency = 'GBP';
    }
    console.log(currency);
    if (XHR.readyState === 4 && XHR.status === 200){
      var url = JSON.parse(XHR.response).bpi[currency].rate;
      val.textContent = url + ' ' + currency;
    }
  };

  XHR.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
}

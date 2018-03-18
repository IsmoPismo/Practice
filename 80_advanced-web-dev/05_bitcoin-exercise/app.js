var val = document.querySelector('span');
var btn = document.querySelector('button');

window.onload = doAllStuff();

btn.addEventListener('click', doAllStuff);

function doAllStuff(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if (XHR.readyState === 4 && XHR.status === 200){
      var url = JSON.parse(XHR.response).bpi.EUR.rate;
      val.textContent = url;
      val.classList.add('span::first-letter');
    }
  };

  XHR.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
}

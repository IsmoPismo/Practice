var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var stdO = document.querySelector('h1');

// XHR
btn1.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.status === 200 && XHR.readyState === 4) {
      var url = JSON.parse(XHR.response);
      stdO.innerText = url;
    }
  };

  XHR.open('GET', "http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  XHR.send();
});

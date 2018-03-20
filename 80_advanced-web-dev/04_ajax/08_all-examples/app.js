var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = $('#btn3');
var btn4 = document.querySelector('#btn4');
var stdO = document.querySelector('h1');
var url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

function updateDisplay(u){
  stdO.innerText = u || url;
}

// XHR
btn1.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.status === 200 && XHR.readyState === 4) {
      var url = JSON.parse(XHR.response);
      updateDisplay(url);
    }
  };

  XHR.open('GET', url);
  XHR.send();
});

// FETCH
btn2.addEventListener('click', function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateDisplay)
  .catch(printError);
});

function handleErrors(req){
  if(!req.ok){
    throw Error(req.status);
  }
  return req;
}

function parseJSON(res){
  var json = (res.json());
  return json;
}

function printError(err){
  console.log(err);
}

// jQUERY
btn3.click(function(){
  $.ajax(url)
  .done(function(quote){
    updateDisplay(quote);
  })
  .fail(function(err){
    console.log(err);
  });
});

// AXOIS
btn4.addEventListener('click', function(){
  axios.get(url)
  .then(function(res){
    updateDisplay(res.data);
  });
});

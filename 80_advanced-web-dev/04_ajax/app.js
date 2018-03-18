var img = document.querySelector('img');
var btn = document.querySelector('button');

btn.addEventListener('click', function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if (XHR.readyState === 4 && XHR.status === 200){
      var url = JSON.parse(XHR.response).message;
      img.src = url;
    }
  };

  XHR.open('GET','https://dog.ceo/api/breeds/image/random');
  XHR.send();
});

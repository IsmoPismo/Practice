var img = document.querySelector('img');
var fName = document.querySelector('#fName');
var lName = document.querySelector('#lName');
var uName = document.querySelector('#nick');
var eMail = document.querySelector('#mail');
var city = document.querySelector('#city');
var btn = document.querySelector('button');

var url = "https://randomuser.me/api";

btn.addEventListener('click', function(){

fetch(url)
.then(handleErrors)
.then(parseJSON)
.then(updateProfile)
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

function updateProfile(res){
  var data = res.results[0];
  fName.textContent = data.name.first;
  lName.textContent = data.name.last;
  uName.textContent = data.login.username;
  eMail.textContent = data.email;
  city.textContent = data.location.city;
  img.src = data.picture.medium;
}

function printError(err){
  console.log(err);
}

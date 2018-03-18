var btn = document.querySelector('button');
var obj;
btn.addEventListener('click', function(){
  var url = "https://api.github.com/users/IsmoPismo";
  fetch(url)
  .then(handleErrors)
  .then(function(req){
    console.log('Everything is fine');
    console.log(req);
    obj = req;
  })
  .catch(function (err) {
    console.log(err);
  });
});

function handleErrors(req){
  if(!req.ok){
    throw Error(req.status);
  }
  return req;
}

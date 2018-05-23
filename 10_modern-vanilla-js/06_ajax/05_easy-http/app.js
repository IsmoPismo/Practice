const http = new easyHTTP;
const dataIsHere = {
  name: 'Stupid',
  paranioa: 7
}

http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res){
  if(err)
    console.log(`Something went wrong: ${err}`);
  else
    console.log(res);
});

http.post('https://jsonplaceholder.typicode.com/posts/1', dataIsHere, function(eer, post){
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
});

http.put('https://jsonplaceholder.typicode.com/posts/1', dataIsHere, function(err, res){
  if(err){
    console.log(err);
  } else {
    console.log(res);
  }
});

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

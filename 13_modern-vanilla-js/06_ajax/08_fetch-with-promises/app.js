const http = new EasyHTTP;
const dataIsHere = {
  name: 'Stupid',
  paranioa: 7
}

http.get('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))
  .catch(err => console.log(err));

http.post('https://jsonplaceholder.typicode.com/posts', dataIsHere)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/posts/1', dataIsHere)
  .then(data => console.log(data))
  .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(err => alert(err));

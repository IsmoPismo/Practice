async function myFunc(){
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 2100);
  });
  let error = false;
  if(!error){
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error('Šomething went horribly wrong'))
  }
}

myFunc()
  .then(res => console.log(res));


async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

getUsers().then(users => alert(users))

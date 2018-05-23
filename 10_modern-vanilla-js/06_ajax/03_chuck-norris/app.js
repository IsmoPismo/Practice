document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest(),
        UIoutput = document.querySelector('.jokes');

  xhr.open('GET', "https://api.chucknorris.io/jokes/random", true);
  xhr.onload = () => {
  if(this.status === 200){
    const response = JSON.parse(this.responseText);
    UIoutput.innerHTML += `<li>${response.value}</li>`
  }
}
  xhr.send()

  e.preventDefault();
}

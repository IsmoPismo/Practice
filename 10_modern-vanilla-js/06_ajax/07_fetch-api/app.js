document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// // Get local text file data
function getText(){
  fetch('test.txt')
    .then(data => data.text())
      .then(textData => console.log(textData))
        .catch(err => console.log('Some shajt went wrong'))
}

// Get local json file
function getJson(){
  fetch('posts.json')
    .then(data => data.json())
      .then(json => {
        const UIoutput = document.querySelector('#output');
        json.forEach(post => {
          UIoutput.innerHTML += `
          <li><strong>${post.title}</strong> - ${post.body}</li>`
        })
      })
        .catch(err => console.log('Some shajt went wrong'))
}


// Get data from github
function getExternal(){
  fetch('https://api.github.com/users')
    .then(data => data.json())
      .then(json => {
        const UIoutput = document.querySelector('#output');
        json.forEach(user => UIoutput.innerHTML += `<li>${user.login}</li>`)
      })
        .catch(err => console.log('Some shajt went wrong'))
}

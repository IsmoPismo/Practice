const github = new Github;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userName = searchUser.value;

  if(userName !== ''){
    github.getUser(userName)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show alert
      } else {
        // Show profile
        console.log(data);
      }
    })
  } else {
    // Clear ui
  }
});

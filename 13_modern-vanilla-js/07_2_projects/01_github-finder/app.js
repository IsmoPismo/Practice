const github = new Github;
const ui = new UI;

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
        ui.showProfile(data.profile)
      }
    })
  } else {
    // Clear ui
  }
});

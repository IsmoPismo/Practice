const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
  const userName = searchUser.value;

  if(userName !== ''){
    github.getUser(userName)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        ui.showAlert('User not Found', 'alert');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    ui.clearProfile();
  }
});

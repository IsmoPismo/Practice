class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  clearProfile(){
    this.profile.innerHTML = ``
  }

  showAlert(msg, cls){
    this.clearAlert();
    const div = document.createElement('div');
    div.className = cls;
    div.innerText = msg;
    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');
    container.insertBefore(div, search)

    setTimeout(() =>  {
      this.clearAlert()
    }, 3400);
  }

  clearAlert(){
    const alert = document.querySelector('.alert');
    if(alert){
      alert.remove();
    }
  }

  showProfile(user){
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="mb-4 btn btn-primary btn-block">
              View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary p-2">
              Public Repos: ${user.public_repos}
            </span>
            <span class="badge badge-primary p-2">
              Public Gists: ${user.public_gists}
            </span>
            <span class="badge badge-primary p-2">
              Followers: ${user.followers}
            </span>
            <span class="badge badge-primary p-2">
              Following: ${user.following}
            </span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at.slice(0, 10)}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-header mb-3">Latest Repos<h3>
      <div id="repos"></div>
    `
  }

  showRepos(repos){
    let output = ``;

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary p-2">
              Stars: ${repo.stargazers_count}
            </span>
            <span class="badge badge-primary p-2">
              Watchers: ${repo.watchers_count}
            </span>
            <span class="badge badge-primary p-2">
              Forks: ${repo.forks_count}
            </span>
          </div>
        </div>
      </div>
        `
    })

    document.getElementById('repos').innerHTML = output;
  }
}

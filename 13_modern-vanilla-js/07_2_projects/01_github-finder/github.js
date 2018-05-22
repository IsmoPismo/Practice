class Github{
  constructor(){
    this.client_id = "70da9125c2224424ae24";
    this.client_secret = "20e963010f790e58c867252682481358718af8b6"
    this.repos_count = 5;
    this.repos_sort = 'pushed: asc'
    this.repos_type = 'owner'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&type=${this.repos_type}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile, repos }
  }

}

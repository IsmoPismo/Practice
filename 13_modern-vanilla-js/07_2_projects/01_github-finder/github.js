class Github{
  constructor(){
    this.client_id = "70da9125c2224424ae24";
    this.client_secret = "20e963010f790e58c867252682481358718af8b6"
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return { profile }
  }

}

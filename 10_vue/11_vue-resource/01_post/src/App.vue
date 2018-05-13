<template>
  <div id="app">
    <h3>Http</h3>
    <form>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="user.username">
      <label for="email">E-Mail</label>
      <input type="email" v-model="user.email">
      <input type="submit" @click.prevent="submit" value="Submit">
    </form>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="u in fetchedUsers">{{ u.username }} - {{ u.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      fetchedUsers: [],
      resource: {}
    }
  },
  methods: {
    submit(){
      // this.$http.post('/podatci.json', this.user)
      // .then(response => {
      //   console.warn(response);
      // }, error => {
      //   console.error(error);
      // });
      this.resource.save({}, this.user);
    },
    fetchData(){
      this.$http.get('podatci.json')
      .then(response => response.json())
      .then(data => {
        const resultArr = [];
        for (let key in data){
          resultArr.push(data[key]);
        }
        this.fetchedUsers = resultArr;
      })
    }
  },
  created(){
    this.resource = this.$resource('podatci.json')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
form {
  display: flex;
  flex-flow: column;
  max-width: 550px;
  margin: 40px auto;
}

input {
  border: 2px solid #2c3e50;
  margin: 15px;
  border-radius: 12px;
}
</style>

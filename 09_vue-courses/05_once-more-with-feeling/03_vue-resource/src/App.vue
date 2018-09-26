<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <h1 class="mt-4">Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                  <label>E-Mail</label>
                  <input type="email" class="form-control" v-model="user.mail">
                </div>
                <button class="btn btn-outline-primary" @click="submit">Submit Data</button>
                <button class="btn btn-outline-dark" @click="fetchData">Get Data</button>
                <h4 class="mt-4">Fetched Users</h4>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in userArray">{{ u.name }} - {{ u.mail }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          user: {
            name: '',
            mail: ''
          },
          userArray: []
        }
      },
      methods: {
        submit(){
          this.$http.post('', this.user)
            .then(response => console.log(response),
              error => console.error(error))
        },
        fetchData(){
          this.$http.get('')
            .then(res => res.json())
            .then(data => {
              const arr = []
              for (let key in data){
                arr.push(data[key])
              }
              this.userArray = arr;
            })
        }
      }
    }
</script>

<style>
</style>

<template>
  <div class="container">
    <h1 class="display-3">The User Page</h1>
    <hr>
    <button class="btn btn-outline-warning" @click="navigateToHome">Navigate to Home</button>
    <p class="display-4 my-4">User Info</p>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      navigateToHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<template>
  <div class="">
    <h1 class="mb-4 display-4">The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-warning btn-lg text-white">Go Back to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      navigateToHome(){
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

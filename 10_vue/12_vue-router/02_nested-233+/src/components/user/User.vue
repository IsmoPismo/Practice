<template>
  <div class="">
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-primary btn-lg btn-block" @click="goToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      goToHome(){
        this.$router.push({name: 'home'});
      }
    }
  }
</script>

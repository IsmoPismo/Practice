<template>
  <div class="">
    <h1>The User Page</h1>
    <p>User ID: {{ id }}</p>
    <button class="btn btn-primary btn-lg btn-block" @click="goToHome">Go to Home</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      goToHome(){
        this.$router.push('/');
      }
    }
  }
</script>

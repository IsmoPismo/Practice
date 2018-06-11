<template>
  <div class="">
    <h1 class="mb-4">The User Page</h1>
    <p class="lead">Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-warning btn-lg text-white">Go Back to Home</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        id: this.$route.params.id
      }
    },
    watch: {
      '$route'(to, from){
        this.id = to.params.id;
      }
    },
    methods: {
      navigateToHome(){
        this.$router.push('/')
      }
    }
  }
</script>

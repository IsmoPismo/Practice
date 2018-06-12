<template>
  <div class="">
    <h3>Edit the User</h3>
    <hr>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <button class="btn btn-outline-danger btn-lg" @click="confirmed=true" v-show="!confirmed">Confirm</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.confirmed){
        next();
      } else {
        if(confirm('Are you sure you want to leave?')){
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>

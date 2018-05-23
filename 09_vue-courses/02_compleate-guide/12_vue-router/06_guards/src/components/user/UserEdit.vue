<template>
  <div class="">
    <h3>Edit the User</h3>
    <hr>
    <p>Language: {{ $route.query.locale }}</p>
    <p>Language: {{ $route.query.q }}</p>
    <label for="confirm">Confirm Leaving</label>
    <input type="checkbox" v-model="confirmed" id="confirm">
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if (this.confirmed){
        next();
      } else {
        if (confirm(`You didn't confirmed you wanna leave. Are you sure you wanna leave?`)){
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>

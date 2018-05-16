<template>
<div class="">
  <h3>Some User Details</h3>
  <br>
  <p>User id is: {{ $route.params.id }}</p>
  <router-link tag="button" :to="link">Edit User</router-link>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      link: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: 'en',
          q: 1000
        },
        hash: '#data'
      }
    }
  },
  beforeRouteEnter(to, from, next){
    // this.link.hash => the component isn't loaded yet =>
    if (true){
      next(vm => {
        console.log(vm.link.hash); // you can invoke a callback (after next is finished)
      });
    } else {
      next(false);
    }
  }
}
</script>

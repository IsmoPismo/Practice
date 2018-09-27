<template>
  <div class="d-flex flex-column align-items-center">
    <h3>Some User Details</h3>
    <p class="lead text-muted text-center">{{ this.$route.params.id }}</p>
    <router-link  tag="button"
                  class="btn btn-outline-info"
                  :to="link">
                  Edit User {{ $route.params.id }}
    </router-link>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        link: {
          name: 'userEdit',
          params: {id: this.$route.params.id},
          query: {
            q: 100,
            locale: 'en'
          }
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      if(false){
        next()
      } else {
        next({name: 'home'})
      }
    }
  }
</script>

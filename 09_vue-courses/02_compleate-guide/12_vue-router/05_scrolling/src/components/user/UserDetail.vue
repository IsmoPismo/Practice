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
  }
}
</script>

<template lang="html">
  <div class="blogs">
    <h1>Get all the blogs</h1>
    <template v-for="blo in blogs">
      <h4 v-rainbow:background="{marg: 10}">{{blo.title}}</h4>
      <p>{{ blo.body }}</p>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return {
      blogs: []
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => this.blogs = data.body.slice(0, 10))
  }
}
</script>

<style lang="css">
  .blogs {
    display: flex;
    margin: 30px auto;
    flex-flow: column;
    max-width: 720px;
  }
  h4 {
    padding: 8px;
    border-radius: 12px;
  }
</style>

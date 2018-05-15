<template lang="html">
  <div class="blogs">
    <h1>Get all the blogs</h1>
    <label for="search">Search</label>
    <input type="text" id="search" v-model="search">
    <template v-for="blo in searchContent">
      <h4>{{ blo.title | capitalize }}</h4>
      <p>{{ blo.body | shorten }}</p>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return {
      blogs: [],
      search: ''
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => this.blogs = data.body.slice(0, 10))
  },
  computed: {
    searchContent(){
      return this.blogs.filter(blog => {
        return blog.title.match(this.search)
      });
    }
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

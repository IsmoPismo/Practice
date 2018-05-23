<template>
  <div id="app">
    <button @click="selected = 'add-blog'" type="button">Add Blog</button>
    <button @click="selected = 'get-blog'" type="button">Get Blog</button>
    <button @click="selected = 'blog-list'" type="button">Blog List</button>
    <component :is="selected"></component>
  </div>
</template>

<script>
import AddBlog from './AddBlog.vue'
import GetBlog from './GetBlog.vue'
import BlogList from './BlogList.vue'

export default {
  data(){
    return {
        selected: 'get-blog'
    }
  },
  components: {
    'add-blog': AddBlog,
    'get-blog': GetBlog,
    'blog-list': BlogList
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
}
</style>

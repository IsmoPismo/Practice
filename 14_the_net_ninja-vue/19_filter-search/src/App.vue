<template>
  <div id="app">
    <button @click="selected = 'add-blog'" type="button">Add Blog</button>
    <button @click="selected = 'get-blog'" type="button">Get Blog</button>
    <component :is="selected"></component>
  </div>
</template>

<script>
import AddBlog from './AddBlog.vue'
import GetBlog from './GetBlog.vue'

export default {
  data(){
    return {
        selected: 'get-blog'
    }
  },
  components: {
    'add-blog': AddBlog,
    'get-blog': GetBlog
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
}
</style>

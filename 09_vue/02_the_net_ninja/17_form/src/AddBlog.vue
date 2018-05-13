<template lang="html">
  <div id="wrapper">
    <h1>Blog added</h1>
    <form>
      <label for="title">Blog Title</label>
      <input type="text" id="title" v-model="blog.title">
      <label for="content">Content</label>
      <textarea id="content" v-model="blog.content"></textarea>
      <div class="check">
        <label>Ninja</label>
        <input type="checkbox" value="Ninja" v-model="blog.categories">
        <label>Cowboy</label>
        <input type="checkbox" value="Cowboy" v-model="blog.categories">
        <label>Potter</label>
        <input type="checkbox" value="Potter" v-model="blog.categories">
        <label>Dinosaur</label>
        <input type="checkbox" value="Dinosaur" v-model="blog.categories">
      </div>
      <select v-model="blog.author">
        <option>Ismar</option>
        <option>Larisa</option>
      </select>
    </form>
    <section>
      <h2>Preview</h2>
      <p>Title: {{ blog.title }}</p>
      <p>Content: </p>
      <p>{{ blog.content }}</p>
      <p>Categories: </p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      }
    }
  }
}
</script>

<style lang="css">
  * {
    box-sizing: border-box;
  }
  #wrapper {
    display: flex;
    flex-flow: column;
    max-width: 700px;
    margin: 50px auto;
  }
  form {
    display: flex;
    flex-flow: column;
  }
  .check {
    margin: 15px 0;
  }
</style>

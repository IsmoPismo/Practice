<template lang="html">
  <div id="wrapper">
    <h1>Blogs and stuff</h1>
    <form  v-if="!submitted">
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
      <button type="submit" @click.prevent="postBlog">Submit</button>
    </form>
    <section v-else>
      <h2>Submitted Succesfully</h2>
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
      },
      submitted: false
    }
  },
  methods: {
    postBlog(){
        this.$http.post('http://jsonplaceholder.typicode.com/posts', {
            title: this.blog.title,
            body: this.blog.content,
            userId: 1
        }).then(function(data){
            console.log(data);
            this.submitted = true;
        });
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

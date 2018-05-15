<template>
  <div class="main">
    <h3>{{ blog.title }}</h3>
    <article class="main-article">
      {{ blog.content }}
    </article>
    <p>{{ blog.author }}</p>
    <ul>
      <li v-for="cat in blog.categories">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
        this.$http.get('https://postreq-4f157.firebaseio.com/blogs/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(jsonData){
          this.blog = jsonData;
        })
    }
  }
</script>

<style media="screen">
  .main {
    max-width: 590px;
    margin: 45px auto;
  }
</style>

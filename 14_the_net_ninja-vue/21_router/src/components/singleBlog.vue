<template>
  <div class="">
    <h3>{{ blog.title }}</h3>
    <article class="main-article">
      {{ blog.body }}
    </article>
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
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
            // console.log(data);
            this.blog = data.body;
        });
    }
  }
</script>

<style media="screen">
  .main-article, h3 {
    max-width: 590px;
    margin: 45px auto;
  }
</style>

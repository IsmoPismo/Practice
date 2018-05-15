<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link :to="`/blog/${blog.id}`"><h2>{{ blog.title }}</h2></router-link>
            <article>{{ blog.content }}</article>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://postreq-4f157.firebaseio.com/blogs.json').then(function(data){
          return data.json()
        }).then(function(jsonData){
          let tempArr = [];
          for (let key in jsonData) {
            jsonData[key].id = key;
            tempArr.push(jsonData[key]);
            }
          this.blogs = tempArr;
          console.log(this.blogs);
          });
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>

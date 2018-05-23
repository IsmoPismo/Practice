export default {
  computed: {
    searchContent(){
      return this.blogs.filter(blog => {
        return blog.title.match(this.search)
      });
    }
  }
}

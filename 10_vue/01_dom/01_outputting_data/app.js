new Vue({
  el: '#app',
  data: {
    title: "Hello World",
    link: "http://www.google.com"
  },
  methods: {
    seyHello: function(){
      this.title = "Hello!";
      return this.title;
    }
  }
})

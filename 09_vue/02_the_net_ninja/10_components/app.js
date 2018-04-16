let one = new Vue({
  el: "#vue-one",
  data: {
    title: 'App One'
  },
  methods: {
  },
  computed: {
    greet: function(){
      return 'Hi from one';
    }
  }
});

let two = new Vue({
  el: "#vue-two",
  data: {
    title: 'App Two'
  },
  methods: {
    punch: function(){
      one.title = 'I punched your title from App Two'
    }
  },
  computed: {
    greet: function(){
      return 'Hi from two';
    }
  }
});

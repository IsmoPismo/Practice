let app = new Vue({
  el: "#vju-ep",
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    //
    // addToA: function() {
    //   console.log('added to A');
    //   return this.age + this.a;
    // },
    //
    // addToB: function() {
    //   console.log('added to B');
    //   return this.age + this.b;
    // }
  },
  computed: {

    addToA: function() {
      console.log('added to A');
      return this.age + this.a;
    },

    addToB: function() {
      console.log('added to B');
      return this.age + this.b;
    }
  }
});

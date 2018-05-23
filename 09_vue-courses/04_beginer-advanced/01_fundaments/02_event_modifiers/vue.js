new Vue({
  el: "#app",
  data: {
    someText: ""
  },
  methods: {
    updateText(dzidza){
      this.someText = dzidza.target.value;
    }
  }
});

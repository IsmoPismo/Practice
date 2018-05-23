new Vue({
  el: "#app",
  data: {
    setRed: false,
    color: 'green'
  },
  computed: {
    divClasses: function(){
      return {
        red: this.setRed,
        blue: !this.setRed
      };
    }
  }
})

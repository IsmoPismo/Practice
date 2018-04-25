new Vue({
  el: "#app",
  data: {
    setRed: false
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

let app = new Vue({
  el: "#vju-ep",
  data: {
    age: 29,
    x: 0,
    y: 0
  },
  methods : {
    increment: function(){
      this.age++;
    },
    displayXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});

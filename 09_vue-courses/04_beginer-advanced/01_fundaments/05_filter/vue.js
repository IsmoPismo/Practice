new Vue({
  el: "#app",
  data: {
    msg: "hello you mofo pizda mater'na"
  },
  filters: {
    upperFirst(m){
      return m.replace(/\b\w/g, l => l.toUpperCase())
    },
    removeSpace(m){
      return m.split(' ').join('');
    }
  }
});

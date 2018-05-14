let app = new Vue({
  el: "#vju-ep",
  data: {
    name: '',
    age: ''
  },
  methods : {
    logName: function(){
      console.log('You Entered a name');
    },
    logAge: function(){
      console.log('You Entered a age');
    }
  }
});

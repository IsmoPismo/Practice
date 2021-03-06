let vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      // Anoying alert
      // alert('Title changed, new value: ' + value);
    }
  }
});

//
setTimeout(function(){
  vm1.title = "Title changed by timer";
}, 3333)

// We can access vm1.properties but vue.js will not recognise:
vm1.newPropertie = "I AM USELESS"
// open up the console
console.log(vm1);

new Vue({
  el: '#app2',
  data: {
    title: 'Second Vue instance'
  },
  methods: {
    changeVm1(){
      vm1.title = "We changed the title from another vue instance"
    }
  }
})

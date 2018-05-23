let data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

let vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Change by $ref'
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

// $el
console.log(vm1.$el); // HTML Element


// $data
console.log(vm1.$data === data); // ==> true

// You can do both
console.log(vm1.title); // or
console.log(vm1.$data.title); // ==> 'The VueJS Instance'


// Accessing $refs from outside
vm1.$refs.heading.innerText = 'Change from outside';
// but this is not reactive and your changes might be overritten by the vue instance

// visit https://vuejs.org/v2/api/ for more info

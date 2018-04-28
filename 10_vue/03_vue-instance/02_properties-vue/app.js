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

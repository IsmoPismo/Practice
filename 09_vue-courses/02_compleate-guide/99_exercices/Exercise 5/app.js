new Vue({
  el: '#exercise',
  data: {
    johnCena: true,
    array: ['Larisa', 'Aria', 'Ismar', '6'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT',
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  },
  methods: {
    checkIfArray(el){
      return Array.isArray(el) ? true : false
    }
  }
});

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = this.createProductList();
  },
  methods: {
    createProductList() {
      return [{
          name: 'Skateboard',
          price: 80
        },
        {
          name: 'Water',
          price: 1
        },
        {
          name: 'Guitar',
          price: 480
        },
      ];
    },
    changeToTest(p) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(p.name);
      node.appendChild(textnode);
      document.querySelector('#sidemap').appendChild(node);
    }
  }
};

new Vue({
    el: '#app',
    data: {
        isShowingCart: false,
        card: {
          items: []
        },
        products: [
            {
                id: 1,
                name: 'MacBook Pro (15 inch)',
                description: 'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
                price: 2999,
                inStock: 50,
                image: "https://static.bhphoto.com/images/images250x250/1496789153000_1342532.jpg"
            },
            {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
                price: 299,
                inStock: 755,
                image: "https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note7.jpg"
            },
            {
                id: 3,
                name: 'HP Officejet 5740 e-All-in-One-printer',
                description: 'This one might not last for so long, but hey, printers never work anyways, right?',
                price: 149,
                inStock: 5,
                image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04339770.png"
            },
            {
                id: 4,
                name: 'iPhone 7 cover',
                description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
                price: 49,
                inStock: 42,
                image: "https://icdn1.digitaltrends.com/image/grovemade_maple_iphone_7-720x720.jpg"
            },
            {
                id: 5,
                name: 'iPad Pro (9.7 inch)',
                description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
                price: 599,
                inStock: 0,
                image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/r/fb/rfb/97/rfb-97-ipad-pro-silver-wifi-2015?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1478124718967"
            },
            {
                id: 6,
                name: 'OnePlus 3 cover',
                description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
                price: 19,
                inStock: 81,
                image: "https://icdn2.digitaltrends.com/image/oneplus-3-display-720x720.jpg?ver=1.jpg"
            }
        ]
    },
    methods: {
      addProduct(p){
        let cardItem = this.checkInStock(p);

        if (cardItem != null){
          cardItem.quantity++;
        }
        else {
          this.card.items.push({
            product: p,
            quantity: 1
          });
        }
        p.inStock--;
      },
      checkInStock(p){
        for (let i = 0; i < this.card.items.length; i++){
          if (this.card.items[i].product.id === p.id){
            return this.card.items[i];
          }
        }
        return null;
      },
      addQuantity(p){
        p.product.inStock--;
        p.quantity++;
      },
      removeItemsFromCard(p){
        var index = this.card.items.indexOf(p);
        if (index !== -1){
          this.card.items.splice(index, 1);
        }
      },
      removeQuantity(p){
        p.product.inStock++;
        p.quantity--;
        if (p.quantity == 0){
          this.removeItemsFromCard(p);
        }
      },
      checkOut(){
        if(confirm('Please submit your purchase')){
          this.card.items = [];
        }
      }
    },
    computed: {
      cardTotal(){
        var total = 0;
        this.card.items.forEach(function(item){
          total += item.product.price * item.quantity;
        });
        return total;
      },
      cardItemsCount(){
        return this.card.items.length;
      },
      taxAmount(){
        return Math.round(this.cardTotal * 0.17);
      }
    },
    filters: {
      currency(value){
        var formatter = Intl.NumberFormat('en-US',{
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 0
        });
        return formatter.format(value)
      }
    }
});

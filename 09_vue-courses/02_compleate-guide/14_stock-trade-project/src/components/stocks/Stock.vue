<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="card mt-4">
      <h5 class="card-header bg-success text-white">
        {{ stock.name }}
        <small class="d-flex">
          (Price: {{ stock.price }})
        </small>
      </h5>
    </div>
    <div class="card-body d-flex justify-content-between bg-light">
      <input  type="number"
              class="form-control mr-2"
              placeholder="Quantity"
              v-model="quantity"
              :class="{danger: insufficientFunds}">
      <button class="btn btn-success px-4"
              @click="buyStock"
              :disabled="insufficientFunds || quantity <= 0">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('buyStocks', order);
      this.quantity = 0;
    }
  },
  computed: {
    funds(){
      return this.$store.getters.funds;
    },
    insufficientFunds(){
      return this.quantity * this.stock.price > this.funds;
    }
  }
}
</script>

<style scoped>
  .danger {
    border: 2px solid red;
  }
</style>

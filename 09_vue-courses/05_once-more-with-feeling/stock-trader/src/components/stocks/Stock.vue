<template lang="html">
  <div class="col-md-6 mb-3">
    <div class="card border-success">
      <div class="card-title bg-success text-white p-3 h4">
        {{ stock.name }}: <small>(price: {{ stock.price }})</small>
      </div>
      <div class="card-body form form-inline input-group-lg">
        <input  type="number"
                class="form-control w-100 my-2"
                v-model="quantity">
        <button type="button"
                class="btn btn-outline-success btn-lg btn-block"
                :class="{danger: insufitientFunds}"
                @click="buyStock"
                :disabled="insufitientFunds || quantity <= 0">
                  {{ insufitientFunds ? 'Insufitient Funds' : 'Buy'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  computed: {
    funds(){
      return this.$store.getters.funds
    },
    insufitientFunds(){
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }

      // console.log(order);
      this.$store.dispatch('buyStock', order)
      this.quantity = 0;
    }
  }
}
</script>

<style lang="css">
.danger {
  border: 1px solid crimson;
  color: crimson !important;
}
.danger:hover {
  background-color: crimson !important;
  color: white !important;
  border: 1px solid crimson;
}
</style>

<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="card mt-4">
      <h5 class="card-header bg-info text-white">
        {{ stock.name }}
        <small class="d-flex">
          (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
        </small>
      </h5>
    </div>
    <div class="card-body d-flex justify-content-between bg-light">
      <input  type="number"
              class="form-control mr-2"
              placeholder="Quantity"
              v-model="quantity">
      <button class="btn btn-info px-4"
              @click="sellStock"
              :disabled="quantity <= 0">Sell</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['stock'],
  data(){
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="col-md-6 mb-5">
    <div class="card border-info">
      <div class="card-title bg-info text-white p-4 h4">
        {{ stock.name }}: <small>(price: {{ stock.price }}) | Qunatity: {{ stock.quantity }}</small>
      </div>
      <div class="card-body form form-inline input-group-lg">
        <input  type="number"
                class="form-control w-100 my-2"
                v-model="quantity">
        <button type="button"
                class="btn btn-outline-info btn-lg btn-block"
                :class="{danger: insufitientQuantity}"
                @click="sellStock"
                :disabled="insufitientQuantity || quantity <= 0">
                {{ insufitientQuantity ? 'Insufitient Quantity' : 'Sell '}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      quantity: 0
    }
  },
  props: ['stock'],
  computed: {
    insufitientQuantity(){
      return this.quantity > this.stock.quantity
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

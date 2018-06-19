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
              v-model="quantity">
      <button class="btn btn-success px-4"
              @click="buyStock"
              :disabled="quantity <= 0">Buy</button>
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
        stockPrica: this.stock.price,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
}
</script>

<style lang="css">
</style>

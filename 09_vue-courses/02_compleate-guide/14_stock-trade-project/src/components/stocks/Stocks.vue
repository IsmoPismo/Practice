<template lang="html">
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  data(){
    return {
      stocks: [
        {id: 1, name: 'BMW', price: 110},
        {id: 2, name: 'Google', price: 120},
        {id: 3, name: 'Cola', price: 140},
        {id: 4, name: 'Instagram', price: 20}
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css">
</style>

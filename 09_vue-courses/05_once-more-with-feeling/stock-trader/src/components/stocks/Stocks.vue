<template lang="html">
<div class="container">
  <div class="row">
    <app-stock v-for="stock in stocks"></app-stock>
  </div>
</div>

</template>

<script>
import appStock from './Stock.vue'

export default {
  data(){
    return {
      stocks: [

        { id: 1, name: 'Merzedes', price: 130 },
        { id: 1, name: 'Tojota', price: 40 },
        { id: 1, name: 'Bemve', price: 110 },
        { id: 1, name: 'Audi', price: 120 }
      ]
    }
  },
  components: {
    appStock
  }
}
</script>

<style lang="css">
</style>

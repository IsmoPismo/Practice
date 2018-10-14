<template lang="html">
<div class="container">
  <div class="row">
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</div>

</template>

<script>
import appStock from './Stock.vue'

export default {
  components: {
    appStock
  },
  computed: {
    stocks(){
      return this.$store.getters.stocks
    }
  }
}
</script>

<style lang="css">
</style>

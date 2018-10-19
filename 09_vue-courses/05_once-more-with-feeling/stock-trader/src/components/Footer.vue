<template>
<footer class="footer bg-light fixed-bottom p-2" style="opacity: .6;">
  <div class="container">
    <button class="btn btn-outline-dark btn-sm" @click="saveData">Save</button>
    <button class="btn btn-outline-dark mr-4 btn-sm" @click="loadData">Load</button>
    <strong class="nav-brand mx-auto">Funds: {{ funds | currency }}</strong>
    <button class="btn btn-outline-dark ml-4 btn-sm" @click="endDay">End Day</button>
</div>
</footer>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay(){
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data)
    },
    loadData(){
      this.fetchData();
    }
  }
}
</script>

<template>
<footer class="footer navbar-light bg-light fixed p-3">
  <div class="container">
    <button class="btn btn-outline-dark" @click="saveData">Save</button>
    <button class="btn btn-outline-dark mr-4" @click="loadData">Load</button>
    <strong class="nav-brand mx-auto">Funds: {{ funds | currency }}</strong>
    <button class="btn btn-outline-dark ml-4" @click="endDay">End Day</button>
    <p>{{ stocky }}</p>
</div>
</footer>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    },
    stocky(){
      return this.$store.getters.stockPortfolio
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

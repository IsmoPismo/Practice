<template>
  <div class="container">
    <app-header :quoteCount='quotes.length' :maxQuotes='maxQuotes'></app-header>
    <new-quote @saveNewQuote="addQuote"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NewQuote from './components/NewQuote.vue'
import QuoteGrid from './components/QuoteGrid.vue'

export default {
  data: function(){
    return {
      quotes: [],
      maxQuotes: 10
    }
  },
  methods: {
    addQuote(newQuote){
      if(this.quotes.length >= 10){
        return alert('You can\'t have more than 10 quotes')
      }
      this.quotes.push(newQuote);
    },
    deleteQuote(index){
      this.quotes.splice(index, 1)
    }
  },
  components: {
    appHeader: Header,
    NewQuote,
    QuoteGrid
  }
}
</script>

<style>
</style>

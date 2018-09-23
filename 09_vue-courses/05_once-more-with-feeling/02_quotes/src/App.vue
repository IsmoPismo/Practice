<template>
  <div class="container">
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
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  data: function(){
    return {
      quotes: ['This is a quote to show something', 'And another one bites the dust'],
      maxQuotes: 10
    }
  },
  methods: {
    addQuote(newQuote){
      this.quotes.push(newQuote);
    },
    deleteQuote(index){
      this.quotes.splice(index, 1)
    }
  },
  components: {
    QuoteGrid,
    NewQuote
  }
}
</script>

<style>
</style>

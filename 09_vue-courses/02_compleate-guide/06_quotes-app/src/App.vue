<template>
    <div class="container">
      <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
      <app-new-quote @addNewQuote="createNew"></app-new-quote>
      <app-quote-grid :quotes="quotes" @deleteQuoteAtIndex="deleteQuote"></app-quote-grid>
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a quote to delete it
        </div>
      </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'

    export default {
        data(){
          return {
            quotes: [],
            maxQuotes: 10
          }
        },
        components: {
          appQuoteGrid: QuoteGrid,
          appNewQuote: NewQuote,
          appHeader: Header
        },
        methods: {
          createNew(quote){
            if (this.quotes.length >= this.maxQuotes) {
              return alert ('You need to delete some quotes to add new ones')
            }
            this.quotes.push(quote);
          },
          deleteQuote(i){
            this.quotes.splice(i, 1);
          }
        }
    }
</script>

<style>
</style>

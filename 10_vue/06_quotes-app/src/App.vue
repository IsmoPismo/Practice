<template>
    <div class="container">
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

    export default {
        data(){
          return {
            quotes: ['Inital Quote', 'Second Quote'],
            maxQuotes: 10
          }
        },
        components: {
          appQuoteGrid: QuoteGrid,
          appNewQuote: NewQuote
        },
        methods: {
          createNew(quote){
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

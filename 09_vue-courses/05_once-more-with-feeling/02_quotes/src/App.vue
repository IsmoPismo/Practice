<template>
  <div class="container">
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'

export default {
  data: function(){
    return {
      quotes: ['This is a quote to show something', 'And another one bites the dust'],
      maxQuotes: 10
    }
  },
  components: {
    QuoteGrid
  }
}
</script>

<style>
</style>

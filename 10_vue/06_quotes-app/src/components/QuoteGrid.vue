<template lang="html">
  <div class="row">
    <quote v-for="(q, i) in quotes" @click.native="deteleQuote(i)">
      {{ q }}
    </quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['quotes'],
  components: {
    Quote
  },
  methods: {
    deteleQuote(i){
      this.$emit('deleteQuoteAtIndex', i);
    }
  }
}
</script>

<style lang="css">
</style>

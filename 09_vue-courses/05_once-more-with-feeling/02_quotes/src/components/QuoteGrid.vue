<template lang="html">
  <div>
    <quote v-for="quote in quotes">{{ quote }}</quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  props: ['quotes'],
  components: {
    Quote
  }
}
</script>

<style lang="css">
</style>

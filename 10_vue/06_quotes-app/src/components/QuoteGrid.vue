<template lang="html">
  <div class="row">
    <quote v-for="q in quotes">
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
  }
}
</script>

<style lang="css">
</style>

<template>
<div class="">
  <app-header></app-header>

  <div class="container">
    <div>
      <router-view class="ml-3"></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

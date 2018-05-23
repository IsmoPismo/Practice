<template lang="html">
  <div id="product">
    <h1>Products Page</h1>
    <p v-for="pro in products">{{ pro.name }} - {{ pro.price }}</p>
  </div>
</template>

<script>
import RetrivedProducts from './mixins/retrieve-products'

export default {
  mixins: [RetrivedProducts]
}
</script>

<style>
  h1, p, li {
    text-align: center;
  }
</style>

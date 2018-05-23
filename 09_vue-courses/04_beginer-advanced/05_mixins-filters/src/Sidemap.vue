<template lang="html">
  <div id="sidemap">
    <h1>Sidemap</h1>
    <li v-for="pro in products">{{ pro.name }}
      <a href="#" @click.prevent="changeToTest(pro)">Some text</a>
    </li>
  </div>
</template>

<script>
import RetrivedProducts from './mixins/retrieve-products'

export default {
  mixins: [RetrivedProducts]
}
</script>

<style>
  h1, li {
    text-align: center;
  }
</style>

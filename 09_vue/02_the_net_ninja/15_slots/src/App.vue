<template>
  <div id="app">
    <form-helper>
      <h1 slot="title">Inserted h1 tag</h1>
      <p slot="text"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'
export default {
  components: {
    FormHelper
  }
}
</script>

<style>

</style>

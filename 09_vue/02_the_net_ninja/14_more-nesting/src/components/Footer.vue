<template>
  <footer>
    <address>{{ contact }}</address>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      contact: 'My Github username: IsmoPismo'
    }
  }
}
</script>

<style scoped>
  address {
    color: lightgreen
  }
  footer {
    padding: 12px;
    background-color: #222;
    text-align: center;
  }
</style>

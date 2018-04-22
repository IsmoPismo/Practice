<template>
  <footer>
    <address>{{ contact }} {{ title }}</address>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      contact: 'This app was made with'
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

<template>
  <footer>
    <address>{{ contact }} {{ title }}</address>
  </footer>
</template>

<script>
import { bus } from '../main'

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
  },
  created(){
    bus.$on('busMethod', (newTitle) => {
      this.title = newTitle;
    })
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

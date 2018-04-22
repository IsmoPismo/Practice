<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
  header {
    background-color: lightgreen;
    padding: 14px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>

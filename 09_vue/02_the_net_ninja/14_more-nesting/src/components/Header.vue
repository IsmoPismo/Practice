<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  methods: {
    changeTitle(){
      this.$emit('changeTitle', 'Vue Wizards')
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

<template>
  <div>
    <h3>{{ title }}</h3>
    <h1>You can call me whatever you want</h1>
    <h2>{{ greeting()}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'I\'ll call you VUE'
    }
  },
  methods: {
    greeting (){
      return 'Houwdy Cowboy';
    }
  }
}
</script>

<style>
  h1, h2, h3 {
    text-align: center;
    margin-top: 28px;
  }
</style>

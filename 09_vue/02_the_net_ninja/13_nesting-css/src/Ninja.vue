<template>
  <ul>
    <h1>Not Scoped</h1>
    <li v-for="ninja in ninjas">
      {{ ninja }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Lucky', 'David', 'Lenny']
    }
  }
}
</script>

<style>
</style>

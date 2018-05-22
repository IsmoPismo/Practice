<template>
  <div>
    <h2>{{ value }}</h2>
    <input type="number" v-model="value">
  </div>
</template>

<script>
export default {
  computed: {
    value: {
    get(){
      return this.$store.getters.value;
    },
    set(value){
      this.$store.dispatch('updateValue', value)
    }
    }
  }
}
</script>

<style>

</style>

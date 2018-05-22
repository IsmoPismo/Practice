<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p title="getters: {
        counterDouble: state => state.counter * 2
      }">Using getters (hover for more): {{ counterDouble }}</p>
  </div>
</template>

<script>
    export default {
        computed: {
          counter(){
            return this.$store.state.counter;
          },
          counterDouble(){
            return this.$store.getters.counterDouble;
          }
        }
    }
</script>

<template>
<div class="component">
  <h3>You may edit the User here</h3>
  <p>Edit me!</p>
  <p>User Age is: {{ userAge }}</p>
  <button class="btn"
    @click="changeAge">
      Change Age
  </button>
  <button class="btn"
    @click="changeAgeFunc()">
      Passing data with callback
  </button>
</div>
</template>

<script>
export default {
  props: {
    userAge: Number,
    changeAgeFunc: Function
  },
  methods: {
    changeAge() {
      this.userAge = 30;
      this.$emit('emitingAge', this.userAge)
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>

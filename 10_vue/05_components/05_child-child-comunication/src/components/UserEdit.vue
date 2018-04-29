<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age is: {{ userAge }}</p>
        <button @click="changeAge">Change Age</button>
    </div>
</template>

<script>
  export default {
    props: {
      userAge: Number
    },
    methods: {
      changeAge(){
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

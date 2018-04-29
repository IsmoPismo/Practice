<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: <strong>{{ myName }}</strong></p>
        <p>User Age Passed: {{ userAgePassed }}</p>
        <button @click="changeName">Change name again</button>
        <button @click="myFunc()">Executes a callback in the parent</button>
    </div>
</template>

<script>
  export default {
    props: {
      myName: {
          type: String
      },
      myFunc: Function,
      userAgePassed: Number
    },
    methods: {
      changeName(){
        this.myName = 'Ismar';
        // emiting the events with two args
        this.$emit('nameWasChanged', this.myName);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

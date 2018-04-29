<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: <strong>{{ myName }}</strong></p>
        <button @click="changeName">Change name again</button>
    </div>
</template>

<script>
  export default {
    // Case sensitive works only in single file projects
    props: {
      myName: {
          type: String,
      }
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

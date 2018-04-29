<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: <strong>{{ myName }}</strong> <em>{{ switchName() }}</em> </p>
    </div>
</template>

<script>
  export default {
    // Case sensitive works only in single file projects
    props: ['myName'],
    methods: {
      switchName(){
        return this.myName.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

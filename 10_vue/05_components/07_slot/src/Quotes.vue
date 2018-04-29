<template lang="html">
  <div class="">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<!-- The styling is applied via child -->
<style lang="css" scoped>
  div {
    border: 1px solid black;
    background-color: #ccc;
    border-radius: 10px;
    text-align: center;
    margin: 20px;
    box-shadow: 1px 1px 2px gray;
  }
  h1 {
    text-decoration: underline;
  }
  p {
    font-variant: small-caps;
    font-size: 2rem;
  }
</style>

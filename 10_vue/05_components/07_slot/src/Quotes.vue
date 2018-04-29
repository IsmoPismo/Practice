<template lang="html">
  <div>
    <slot name="first-slot"></slot>
    <span><slot name="subtitle">Default Text Here will get overwriten</slot></span>
    <div>
      <slot></slot>
    </div>
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
    line-height: 2;
    letter-spacing: 1.2px;
  }
</style>

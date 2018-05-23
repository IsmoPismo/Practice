<template lang="html">
  <div class="">
    <slot name="title"></slot>
    <h2>This is the Form Helper</h2>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  h1, p, h2 {
    text-transform: capitalize;
    text-align: center;
    margin-top: 25px;
  }
</style>

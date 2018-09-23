<template lang="html">
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .panel-body {
    font-family: 'Arizonia', cursive;
    font-size: 25px;
    color: #6e6e6e;
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>

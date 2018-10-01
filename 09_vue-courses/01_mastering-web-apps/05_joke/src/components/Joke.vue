<template lang="html">
  <div class="col-md-6 mx-auto">
    <div class="joke-card">
      <div class="card-block">
        <p><u>{{ joke.setup }}</u></p>
        <p><em>{{ joke.punchline }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['joke']
}
</script>

<style media="screen">
  .joke-card {
    border: 2px solid #212529;
    border-radius: 2px;
    padding: 6px;
    margin: 6px;
  }
</style>

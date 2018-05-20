<template id="">
  <div>
  <transition name='onload' appear>
    <div class="alert alert-success pt-4" role="alert">
      <h4 class="alert-heading">On Load Animations</h4>
      <p>This is where the text comes in</p>
    </div>
  </transition>
</div>
</template>

<style scoped>
    .onload-enter {
    opacity: 0;
    transform: translateY(40px);
  }
    .onload-enter-active {
      transition: transform 610ms ease-out, opacity 450ms ease-in;
  }
</style>

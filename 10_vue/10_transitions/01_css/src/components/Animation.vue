<template id="">
  <div class="container">
    <h4>CSS Animations</h4>
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <hr>
              <button class="btn btn-primary"
                      @click="show = !show">Click the primary btn</button>
              <br><br>
              <transition name="slide">
                <div  class="alert alert-info"
                      v-if="show"
                >Some random text here to read...</div>
              </transition>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              show: true
            }
        }
    }
</script>

<style scoped>
  /* v-enter classes */
  .slide-enter-active {
    animation: slide-in 350ms linear forwards;
  }
  .slide-leave-active {
    animation: slide-out 190ms ease-in forwards;
  }

  /* Keyframes Animations */
  @keyframes slide-in {
    from {
      transform: translateX(290px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
    }
  }
  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }
    15% {
      transform: translateX(-15px);
      opacity: 1;
    }
    100% {
      transform: translateX(100px);
      opacity: 0;
    }
  }
</style>

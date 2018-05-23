<template id="">
  <div class="container">
    <h4>CSS Animations + Transitions</h4>
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <hr>
              <button class="btn btn-primary"
                      @click="show = !show">Click the primary btn</button>
              <br><br>
              <transition name="mixed" type="animation">
                <div  class="alert alert-info"
                      v-if="show"
                      style="white-space: pre"
                >{{ css }}</div>
              </transition>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              show: true,
              css: `
              style="white-space: pre"
              <transition type="animation">

              CSS Classes:
              .mixed-enter {
                opacity: 0;
              }
              .mixed-enter-active {
                animation: roll-in 350ms linear forwards;
                transition: opacity 1s linear;
              }
              .mixed-leave-active {
                animation: slide-out 290ms ease-in forwards;
                transition: opacity 1s linear;
                opacity: 0;
              }`
            }
        }
    }
</script>

<style scoped>
  /* v-enter classes */
  .mixed-enter {
    opacity: 0;
  }
  .mixed-enter-active {
    animation: roll-in 350ms linear forwards;
    transition: opacity 1s linear;
  }
  .mixed-leave-active {
    animation: slide-out 290ms ease-in forwards;
    transition: opacity 1s linear;
    opacity: 0;
  }

  @keyframes roll-in {
    from {
      transform: translateX(290px) rotateX(95deg);
    }
    to {
      transform: translateX(0px) rotateX(0deg);
    }
  }
  @keyframes slide-out {
    0% {
      transform: translateX(0) rotateX(0deg);
    }
    80% {
      transform: translate(100px) rotateX(55deg);
    }
    100% {
      transform: translateX(150px) rotateX(80deg);
    }
  }
</style>

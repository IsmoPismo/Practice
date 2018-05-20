<template id="">
  <div class="container">
    <h3>CSS Transitions</h3>
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <hr>
              <button class="btn btn-primary"
                      @click="show = !show">Click the primary btn</button>
              <br><br>
              <transition name="fade">
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

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 250ms ease-out;
  }
  .fade-leave-active {
    transition: opacity 290ms ease-in;
    opacity: 0;
  }
</style>

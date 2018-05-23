<template>
  <div class="container">
    <h3>Animate.css</h3>
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <hr>
              <button class="btn btn-primary"
                      @click="show = !show">Click the primary btn</button>
              <br><br>
              <transition name="fade"
                          enter-active-class="animated rotateInDownRight"
                          leave-active-class="animated hinge">
                <div  class="alert alert-info"
                      v-if="show"
                      style="white-space: pre"
                >enter-active-class="animated slideInUp"
leave-active-class="animated rotateOutUpRight"</div>
              </transition>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        show: false
      }
    }
  }
</script>

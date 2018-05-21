<template id="">
<div class="">
  <h1>Dynamic</h1>
  <br>
  <button class="btn btn-dark" @click="show = !show">Javascript Button</button>
  <br><br>
  <transition
    @before-enter = "beforeEnter"
    @enter = "enter"
    @before-leave = "beforeLeave"
    @leave = "leave"
    :css="false"
    ><div id="div" v-if="show"><span id="code">{{ code }}</span></div>
  </transition>
</div>
</template>

<script>
  export default {
    data(){
      return {
        show: true,
        elementWidth: 100,
        code:`
        @before-enter = "beforeEnter"
        @enter = "enter"
        @after-enter = "afterEnter"
        @enter-cancelled = "enterCancelled"

        @before-leave = "beforeLeave"
        @leave = "leave"
        @after-leave = "afterLeave"
        @leave-cancelled = "leaveCancelled"

        :css="false"`
      }
    },
    methods: {
      beforeEnter(el){
        this.elementWidth = 300;
        let text = el.firstChild;
        text.style.opacity = 0;
        el.style.opacity = 0;
        el.style.width = `${this.elementWidth}px`
      },
      enter(el, done){
        let round = 1;
        let opacityParam = 0;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 20) + 'px';
          el.firstChild.style.opacity = opacityParam
          round++;
          opacityParam += .1
          el.style.opacity = opacityParam/1.7
          if (round === 18){
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      beforeLeave(el){
        this.elementWidth = 600
        el.style.width = `${this.elementWidth}px`
      },
      leave(el, done){
        let round = 1;
        let opacityParam = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 20) + 'px';
          el.firstChild.style.opacity = opacityParam
          opacityParam-= .1
          round++;
          if (round === 20){
            clearInterval(interval);
            done();
          }
        }, 20);
      }
    }
  }
</script>

<style media="screen">
  #div {
    width: 800px;
    height: 500px;
    background: crimson;
    white-space: pre;
    color: white;
    padding: 15px;
    border-radius: 15px;
  }
</style>

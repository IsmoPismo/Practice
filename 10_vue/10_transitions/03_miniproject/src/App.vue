<template>
  <div>
    <h1>The Super Quiz</h1>
    <hr>
    <div class="shablon">
      <transition>
        <component :is="currentComponent" :currentComponent="currentComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue'
import Answer from './components/Answer.vue'

export default {
  data(){
    return {
        currentComponent: 'app-question'
    }
  },
  components: {
    'app-question': Question,
    'app-answer': Answer
  }
}
</script>

<style>
  div {
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .shablon {
    border: 2px solid black;
    border-radius: 20px;
    width: 500px;
    height: 300px;
  }
</style>

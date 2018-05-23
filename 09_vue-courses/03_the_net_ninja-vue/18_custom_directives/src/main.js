import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.directive('rainbow', {
  bind(el, binding, vNode){
    if(binding.arg == 'background'){
      el.style.backgroundColor = `#${Math.random().toString().slice(2,8)}`;
      el.style.color = "white"
    } else {
        el.style.color = `#${Math.random().toString().slice(2,8)}`;}

      if(binding.value.marg > 8){
        el.style.marginTop = "20px"
      }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

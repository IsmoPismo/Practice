import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lower', (val) => val.toLowerCase())

new Vue({
  el: '#app',
  render: h => h(App)
})

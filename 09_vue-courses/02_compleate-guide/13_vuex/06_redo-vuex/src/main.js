import { store } from './store/store'
import App from './App.vue'
import Vue from 'vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

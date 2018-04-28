import Vue from 'vue'
import App from './App.vue'

// the root element App.vue kinda replaces the Vue instance new Vue (the methods, data, etc is writen in App.vue)
new Vue({
  el: '#app',
  render: h => h(App)
})

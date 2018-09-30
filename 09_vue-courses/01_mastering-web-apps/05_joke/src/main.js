import Vue from 'vue'
import App from './components/App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

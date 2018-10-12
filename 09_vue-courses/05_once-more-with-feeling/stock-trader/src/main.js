import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
import App from './App.vue'
import { routes } from './routes'

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import VueRouter from 'vue-router'
import { routes } from './routes'
import App from './App.vue'
import Vue from 'vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

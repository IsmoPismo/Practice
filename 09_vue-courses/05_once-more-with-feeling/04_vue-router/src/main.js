import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('Global for Each');
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

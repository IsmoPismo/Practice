import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

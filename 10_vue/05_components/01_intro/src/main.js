import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// Since we registered our component GLOBALY, we can access it from App.vue => 
Vue.component('ismar', Home);

// the root element App.vue kinda replaces the Vue instance new Vue (the methods, data, etc is writen in App.vue)
new Vue({
  el: '#app',
  render: h => h(App)
})

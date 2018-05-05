import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue';

Vue.component('announcement', Announcement);

new Vue({
  el: '#app',
  render: h => h(App)
})

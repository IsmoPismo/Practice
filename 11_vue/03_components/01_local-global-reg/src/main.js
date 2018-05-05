import Vue from 'vue'
import App from './App.vue'
import Announcement from './Announcement.vue';
import MainArticle from './Article.vue'

Vue.component('announcement', Announcement);
Vue.component('app-article', MainArticle);

new Vue({
  el: '#app',
  render: h => h(App)
})

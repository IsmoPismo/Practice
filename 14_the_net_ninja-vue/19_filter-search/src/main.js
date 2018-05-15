import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.filter('capitalize', function(val){
  return val[0].toUpperCase() + val.slice(1);
});

Vue.filter('shorten', function(val){
  return val[0].toUpperCase() + val.slice(1,180) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})

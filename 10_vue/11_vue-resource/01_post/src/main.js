import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = "https://postreq-4f157.firebaseio.com/podatci.json"
Vue.http.interceptors.push((request, next) => {
  console.error(request);
  if (request.method == 'POST'){
    response.method = 'PUT'
  }
  next(response => {
    response.json = () => {return  {message: response.body}};
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})

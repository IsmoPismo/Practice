import Vue from 'vue'
import App from './App.vue'

Vue.filter('count-chars', function(val) {
        const number = val.length;
        return `${val} (${number})`
    }
);

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
global.jQuery = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'


new Vue({
  el: '#app',
  render: h => h(App)
})

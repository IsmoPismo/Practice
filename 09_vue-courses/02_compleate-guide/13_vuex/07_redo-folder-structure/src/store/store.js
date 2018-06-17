import Vuex from 'vuex'
import Vue from 'vue';
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    counter
  }
})

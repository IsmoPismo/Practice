import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counterDouble: state => state.counter * 2
  }
})

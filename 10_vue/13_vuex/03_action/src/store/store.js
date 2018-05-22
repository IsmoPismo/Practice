import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    incrementC: state => state.counter++
  },
  mutations: {
    removeFive: state => {
      state.counter -= 5;
    }
  },
  actions: {
    // addFive: context => {
    //   context.commit('removeFive');
    // } => We can destructure the object
    addFive: ({commit}) => {
      commit('removeFive')
    }
  }
})

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
    removeFive: (state, payload) => {
      state.counter -= payload;
    }
  },
  actions: {
    // addFive: context => {
    //   context.commit('removeFive');
    // } => We can destructure the object
    addFive: ({commit}, payload) => {
      commit('removeFive', payload)
    },
    asyncFive: ({commit}, payload) => {
      setTimeout(function() {
        commit('removeFive', payload.by)
      }, payload.delay);
    }
  }
})

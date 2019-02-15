import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    count: 0
  },

  mutations: {
    incrementCounter (state, payload) {
      state.count += payload
    }
  },

  actions: {
    inrementAction ({commit}, payload) {
      commit('incrementCounter', payload)
    }
  },

  getters: {
    counter (state) {
      return state.count
    }
  }
})

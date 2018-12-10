import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = user
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user
    },
  },
  actions: {
    login({commit}, token) {
      commit('setToken', token)
      localStorage.token = token
      if (token) {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        const user = window.atob(base64)
        commit('setUser', user)
      } else {
        commit('setToken', '')
        commit('setUser', null)
      }
    },
    isAdmin({state}) {
      return state.user.role_id === 3;
    },
  },
});

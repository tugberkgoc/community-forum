const actions = {
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
}

export default {
  actions,
}

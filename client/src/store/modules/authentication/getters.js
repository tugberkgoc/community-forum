const getters = {
  isLoggedIn(state) {
    return !!state.user
  },
}

export default {
  getters,
}

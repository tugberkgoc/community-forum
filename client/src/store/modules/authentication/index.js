import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const defaultState = {
  token: '',
  user: null,
}

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
}

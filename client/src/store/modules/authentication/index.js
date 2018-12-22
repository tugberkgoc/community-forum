import defaultGetters from './getters'
import defaultActions from './actions'
import defaultMutations from './mutations'

const getters = defaultGetters.getters;
const actions = defaultActions.actions;
const mutations = defaultMutations.mutations;

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

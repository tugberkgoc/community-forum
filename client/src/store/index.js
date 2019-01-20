import Vue from 'vue';
import Vuex from 'vuex';
import authenticationModule from './modules/authentication';
import registrationModule from './modules/registration';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication: authenticationModule,
    registration: registrationModule
  },
})

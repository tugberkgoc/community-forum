import Vue from 'vue';
import 'bootswatch/dist/cosmo/bootstrap.css';
import App from './App.vue';
import router from './router';
import store from './store/modules/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

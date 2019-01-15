import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LoginToken from './views/LoginToken.vue'
import Admin from './views/Admin.vue'
import Test from './views/Test'

import store from './store'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/login/token/:token',
      name: 'login-token',
      component: LoginToken,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter(to, from, next) {
        if(store.getters.isLoggedIn) {
          next()
        } else {
          next('/')
        }
      },
    },
  ],
});

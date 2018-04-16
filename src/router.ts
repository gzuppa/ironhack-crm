import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'
import Interviews from './views/Interviews.vue';
import UsersList from './views/UsersList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: About
    },
    {
      path: '/interviews',
      name: 'interviews',
      component: Interviews
    }
  ],
    mode: 'history'
})

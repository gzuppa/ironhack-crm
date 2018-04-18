import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dashboard from './views/Dashboard.vue'
import Interviews from './views/Interviews.vue';
import UsersList from './views/UsersList.vue';
import Login from './views/Login.vue';
import LoungeList from './views/Lounge-list.vue';
import LoungeDetail from './views/Lounge-detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
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
      component: Interviews
    },
    {
      path: '/interviews/loungelist',
      component: LoungeList,
    },
    {
        path: '/interviews/loungelist/:id',
        component: LoungeDetail
    }
  ],
    mode: 'history'
})

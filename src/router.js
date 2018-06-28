import Vue from 'vue';
import Router from 'vue-router';
import MasterView from './MasterView.vue';
import Kanban from './modules/kanban/router';
import {
  login,
  page404,
  page403,
  page500,
} from './core/router_common';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'kanban' },
    },
    {
      path: '/kanban',
      component: MasterView,
      children: Kanban('kanban'),
    },

    login,
    page404,
    page403,
    page500,
  ],
});
